import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images, onOpenModal }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        smallImageURL={webformatURL}
        largeImageURL={largeImageURL}
        onOpenModal={onOpenModal}
      />
    ))}
  </ul>
);

export default ImageGallery;
