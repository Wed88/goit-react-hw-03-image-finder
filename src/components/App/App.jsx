import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
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
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ isLoading: true });
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=24433477-a7717dfa51cf01b03daed8616&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({ images: response.data.hits });
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

        <ToastContainer />
      </div>
    );
  }
}
