import React from 'react'
import './Projects.css'
import Projects1 from '../projects/Projects1.jsx'
function Projects() {
  return (
    <div>
      <div className="home__hero">
      <div className="home__hero__text center" data-mobile="">
        <p className="oh">Few of my</p>
      </div>
      <div className="home__hero__text center" data-mobile="">
        <p className="oh">Amazing</p>
      </div>
      <div className="home__hero__text center" data-mobile="">
        <p className="oh project">Projects</p>
      </div>
    </div>
    <div className='project 1'>
      <Projects1 />
    </div>
    </div>
  )
}

export default Projects