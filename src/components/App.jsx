import './styles.css'
import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);

      const apiKey = '39892838-9daa7d960265e10dbeb74eed6';
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (!response.ok) {
        throw new Error('Error fetching images');
      }

      const data = await response.json();
      console.log('Fetched images data:', data);
      setImages((prevImages) => [...prevImages, ...data.hits]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, page]);

  useEffect(() => {
    if (!searchQuery) return;

    fetchImages();

  }, [searchQuery, page, fetchImages]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setShowModal(true);
    setSelectedImage(image.largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedImageUrl(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {!loading && images.length > 0 && (
        <Button onClick={loadMoreImages} isHidden={false} />
      )}
      {showModal && selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} imageUrl={selectedImageUrl} />
      )}
    </div>
  );
};

export default App;

