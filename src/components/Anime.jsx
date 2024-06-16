import React, { useState, useEffect } from 'react';
import anime from '../images/anime_Girl.png';
import './anime.css'; // Import your CSS file

function Anime() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="anime-container">
      <img
        src={anime}
        alt="anime"
        className="anime-image"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
      />

<div className='marquees'>
<section className='marquee' style={{ '--char-count': 24 }}>
    <div className='marquee--inner'>
      <p>Learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>Learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>Learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>Learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>Learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>Learning new technologies and solving complex problems</p>
    </div>
  </section>

  <div className='marquee' style={{ '--char-count': 30 }}>
    <div className='marquee--inner'>
      <p>React Express Node.js HTML Tailwind Mongo</p>
      <p aria-hidden='true'>React Express Node.js HTML Tailwind Mongo</p>
      <p aria-hidden='true'>React Express Node.js HTML Tailwind Mongo</p>
      <p aria-hidden='true'>React Express Node.js HTML Tailwind Mongo</p>
      <p aria-hidden='true'>React Express Node.js HTML Tailwind Mongo</p>
      <p aria-hidden='true'>React Express Node.js HTML Tailwind Mongo</p>
      <p aria-hidden='true'>React Express Node.js HTML Tailwind Mongo</p>
    </div>
  </div>

  <section className='marquee' style={{ '--char-count': 22 }}>
    <div className='marquee--inner'>
      <p>I have experience in building responsive and scalable web applications</p>
      <p aria-hidden='true'>I have experience in building responsive and scalable web applications</p>
      <p aria-hidden='true'>I have experience in building responsive and scalable web applications</p>
      <p aria-hidden='true'>I have experience in building responsive and scalable web applications</p>
      <p aria-hidden='true'>I have experience in building responsive and scalable web applications</p>
      <p aria-hidden='true'>I have experience in building responsive and scalable web applications</p>
    </div>
  </section>

  <section className='marquee' style={{ '--char-count': 24 }}>
    <div className='marquee--inner'>
      <p>I am passionate about learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>I am passionate about learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>I am passionate about learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>I am passionate about learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>I am passionate about learning new technologies and solving complex problems</p>
      <p aria-hidden='true'>I am passionate about learning new technologies and solving complex problems</p>
    </div>
  </section>
</div>


    </div>
  );
}

export default Anime;
