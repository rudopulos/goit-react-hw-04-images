// Modal.jsx
import React from 'react';

const Modal = ({ onClose, image }) => {
  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={image} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default Modal;

