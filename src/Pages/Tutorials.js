import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tutorial from '../components/Tutorials/Tutorial';
import TutorialNav from '../Layout/TutorialNav';




function Tutorials() {
  return (
    <>
        <TutorialNav/>
        <div className='tutorial-subnav'>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..."/>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            </div>
            <div className='nav-buttons'>
                <button className='nav-btn'>All</button>
                <button className='nav-btn'>Evive</button>
                <button className='nav-btn'>Ardunio</button>
                <button className='nav-btn'>Robots</button>
                <button className='nav-btn'>Dabble</button>
                <button className='nav-btn'>Animation</button>
                <button className='nav-btn'>Art</button>
                <button className='nav-btn'>Music</button>
                <button className='nav-btn'>Games</button>
                <button className='nav-btn'>Stories</button>
                <button className='tour-btn'>Take a Tour</button>
            </div>
        </div>
        <section className='tutorials'> 
            <div className="container">
                <div>
                    <div>
                        <Tutorial/>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Tutorials;
