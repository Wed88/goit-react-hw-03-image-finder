import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ smallImageURL, largeImageURL, onOpenModal }) => (
  <li
    className="ImageGalleryItem"
    onClick={() => {
      onOpenModal(largeImageURL);
    }}
  >
    <img className="ImageGalleryItem-image" src={smallImageURL} alt="" />
  </li>
);

export default ImageGalleryItem;
