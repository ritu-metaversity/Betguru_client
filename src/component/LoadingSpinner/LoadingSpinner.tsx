import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div id="pause" className="d-flex align-items-center justify-content-center">
      <div id="spinner"></div>
      {/* <span style={{ color: 'white', marginTop: '6rem' }}>
        Please Wait....
      </span> */}
    </div>
  );
};

export default LoadingSpinner;
