//Loader.jsx
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <div className="loader">
    <TailSpin color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
