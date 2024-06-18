import React from 'react'
import './Projects1.css';
import chatbot from '../images/Chatbot.png';

const Projects1 = () => {
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

export default Projects1;
