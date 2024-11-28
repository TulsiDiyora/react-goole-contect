import React from 'react';
import './Loading.css'; 

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className='h5 mt-3'>Loading...</p>
    </div>
  );
}

export default Loading;
