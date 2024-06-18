import React from 'react'
import './P1.css';
import chatbot from '../images/Chatbot.png';

const P1 = () => {
  return (
    <div className="furniture-gallery">
      <div className="furniture-image">
        <img src={chatbot} alt="Furniture on Laptop" />
        <div className="furniture-description">
        <p>00(1) AI CHATBOT / MERN STACK</p>
      </div>
      </div>
      
    </div>
  );
}

export default P1;
