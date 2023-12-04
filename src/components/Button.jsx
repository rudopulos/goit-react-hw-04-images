// Button.jsx
import React from 'react';

const Button = ({ onClick, isHidden }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
