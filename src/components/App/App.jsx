import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Searchbar />
      <ImageGallery />
    </div>
  );
};
