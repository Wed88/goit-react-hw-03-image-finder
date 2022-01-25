import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ smallImageURL }) => (
  <li className="ImageGalleryItem">
    <img className="ImageGalleryItem-image" src={smallImageURL} alt="" />
  </li>
);

export default ImageGalleryItem;
