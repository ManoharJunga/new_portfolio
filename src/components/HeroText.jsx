import React from 'react';
import './HeroText.css';

function HeroText() {
  return (
    <div className="home__hero">
      <div className="home__hero__text left" data-mobile="">
        <p className="oh">WEB DEVELOPER</p>
      </div>
      <div className="home__hero__text left" data-mobile="">
        <p className="oh">MERN STACK</p>
      </div>
      <div className="home__hero__text right" data-mobile="">
        <p className="oh">COMPUTER SCIENCE</p>
      </div>
      <div className="home__hero__text center" data-mobile="">
        <p className="oh">PASSIONATE </p>
      </div>
      <div className="home__hero__text center" data-mobile="">
        <p className="oh">ABOUT CODING</p>
      </div>
    </div>
  );
}

export default HeroText;
