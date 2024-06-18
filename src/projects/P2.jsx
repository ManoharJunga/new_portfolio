import React from 'react';
import './P2.css';
import DChat from '../images/DChat.png';

const P2 = () => {
  return (
    <div className="gallery-desktop">
      <div className="gallery-images">
        <img src={DChat} alt="Gallery" />
      </div>
      <div className="gallery-description">
        <p>00(2) DChat / Full Stack</p>
      </div>
    </div>
  );
}

export default P2;
