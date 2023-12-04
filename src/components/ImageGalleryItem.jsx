// ImageGalleryItem.jsx
import React from 'react';

const ImageGalleryItem = ({ image, openModal }) => (
  <li className="ImageGalleryItem">
    <img
      src={image.webformatURL}
      alt={image.tags}
      className="ImageGalleryItem-image"
      onClick={() => openModal(image)}
    />
  </li>
);

export default ImageGalleryItem;

