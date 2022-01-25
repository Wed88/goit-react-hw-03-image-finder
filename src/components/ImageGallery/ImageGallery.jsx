import React from 'react';
// import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} smallImageURL={webformatURL} />
    ))}
  </ul>
);

export default ImageGallery;
