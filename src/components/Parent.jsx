import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import Modal from './Modal';

const Parent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (largeImageURL) => {
    setSelectedImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ImageGallery onImageClick={handleImageClick} selectedImage={selectedImage} />
      {selectedImage && <Modal largeImageURL={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Parent;
