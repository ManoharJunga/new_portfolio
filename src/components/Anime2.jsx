import React from 'react';
import anime2 from '../images/anime.png';
import { useNavigate, useLocation } from 'react-router-dom';
import './Anime2.css';

function Anime2() {


const navigate = useNavigate();
const location = useLocation();


const handleNavigation = (path) => {
  if (location.pathname !== path) {
    navigate(path);
  }
};
  return (
    <div className="anime2-container">
      <img className="image" src={anime2} alt="anime2" />
      <button  className="button_anime">
        <span className="span-mother">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
        </span>
        <span className="span-mother2">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
        </span>
      </button>
      <button className="button_anime2">
        <span className="span-mother">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
        </span>
        <span className="span-mother2">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
        </span>
      </button>
      <button onClick={() => handleNavigation("/about")} className="button_anime3">
        <span className="span-mother">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </span>
        <span className="span-mother2">
        <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </span>
      </button>
    </div>
  );
}

export default Anime2;
