import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({
  smallImageURL,
  largeImageURL,
  tags,
  onOpenModal,
}) => (
  <li
    className="ImageGalleryItem"
    onClick={() => {
      onOpenModal(largeImageURL);
    }}
  >
    <img className="ImageGalleryItem-image" src={smallImageURL} alt={tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  smallImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,

  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
