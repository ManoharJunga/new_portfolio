import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <div className="home__hero__text right" data-mobile="">
        <p className="oh">My Skills</p>
      </div>
      <div className="skills">
        <ul className="skill-column">
          <li className="skill-item">React JS</li>
          <li className="skill-item">Express JS</li>
          <li className="skill-item">Node JS</li>
          <li className="skill-item">HTML</li>
          <li className="skill-item">CSS</li>
          <li className="skill-item">Tailwind CSS</li>
        </ul>
        <ul className="skill-column">
          <li className="skill-item">TensorFlow</li>
          <li className="skill-item">PyTorch</li>
          <li className="skill-item">Neural Networks</li>
          <li className="skill-item">Machine Learning</li>
          <li className="skill-item">AI</li>
        </ul>
        <ul className="skill-column">
          <li className="skill-item">C</li>
          <li className="skill-item">Python</li>
          <li className="skill-item">Swift</li>
          <li className="skill-item">C++</li>
          <li className="skill-item">Java</li>
          <li className="skill-item">TypeScript</li>
          <li className="skill-item">JavaScript</li>
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
