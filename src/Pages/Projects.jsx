import React from 'react'
import './Projects.css'
import P1 from '../projects/P1.jsx'
import P2 from '../projects/P2.jsx'
import P3 from '../projects/P3.jsx'
import P4 from '../projects/P4.jsx'
import Footer from '../components/Footer'

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
        <p className="oh project_text">Projects</p>
      </div>
    </div>
    <div className='project_1'>
      <P1 />
      <P2 />
      
    </div>
    <div className='project_1'>
    <P3 />
    <P4 />
    </div>
    <Footer />
    </div>
  )
}

export default Projects