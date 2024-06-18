import React from 'react';
import './P2.css';
import portfolio from '../images/portfolio.png';

const P3 = () => {
  return (
    <div className="gallery-desktop">
      <div className="gallery-images">
        <img src={[portfolio]} alt="Gallery" />
      </div>
      <div className="gallery-description">
        <p>00(3) PORTFOLIO / 3D PORTFOLIO</p>
      </div>
    </div>
  );
}

export default P3;
