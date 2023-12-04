// ImageGallery.jsx
import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';import Modal from './Modal';


const ImageGallery = ({ images, openModal, selectedImage }) => {
  return (
    <div className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
      ))}
      {selectedImage && <Modal largeImageURL={selectedImage} onClose={() => openModal(null)} />}
    </div>
  );
};

export default ImageGallery;
