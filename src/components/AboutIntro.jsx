import React from 'react';
import './AboutIntro.css';

function Intro() {
  return (
    <div className="homehero">
      <div className="homeherotext right" data-mobile="">
        <p className="oh">Innovative code.</p>
      </div>
      <div className="homeherotext left" data-mobile="">
        <p className="oh">Creative team.</p>
      </div>
      <div className="homeherotext left" data-mobile="">
        <p className="oh">Agile progress.</p>
      </div>
      <div className='para'>
        <p>Software Engineer based in India, specializing in technical education through hands-on learning and building applications.</p>
        <p>Full Stack Developer Pioneering UAV Path Planning with Amazing Innovations. MERN Stack Developer.</p>
      </div>
    </div>
  );
}

export default Intro;
