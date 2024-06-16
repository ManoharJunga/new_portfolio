import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <div className="home__hero__text right" data-mobile="">
        <p className="oh">My Skills</p>
      </div>
      <div className="skills">
        <ul>
          <li>React JS</li>
          <li>Express JS</li>
          <li>Node JS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
        </ul>
        <ul>
          <li>TensorFlow</li>
          <li>PyTorch</li>
          <li>Neural Networks</li>
          <li>Machine Learning</li>
          <li>AI</li>
        </ul>
        <ul>
          <li>C</li>
          <li>Python</li>
          <li>Swift</li>
          <li>C++</li>
          <li>Java</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className="home__hero__text left" data-mobile="">
        <p className="oh">From</p>
      </div>
      <div className="home__hero__text left" data-mobile="">
        <p className="oh">Strategy</p>
      </div>

      <div className="home__hero__text right" data-mobile="">
        <p className="oh">To design and</p>
      </div>
      <div className="home__hero__text center" data-mobile="">
        <p className="oh">Development.</p>
      </div>
    </div>
  );
}

export default Skills;
