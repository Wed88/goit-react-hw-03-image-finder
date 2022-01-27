import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import api from 'services/pixabayApi';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default class App extends Component {
  state = {
    imageName: '',
    images: [],
    isLoading: false,
    error: null,
  };

  handleSearchbarSubmit = imageName => {
    this.setState({ imageName });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const newName = this.state.imageName;
    const images = this.state.images;

    if (prevName !== newName) {
      this.setState({ isLoading: true });

      try {
        await api
          .fetchImageNameWithQuery(newName)
          .then(images => this.setState({ images }));
        if (images.length === 0) {
          toast.error(
            'Ops, there are no images matching your search query. Please try again.'
          );

          return;
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && <ImageGallery images={images} />}

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}
