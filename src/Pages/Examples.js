import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Example from '../components/Example/Example';
import ExampleNav from '../Layout/ExampleNav';
import { Link } from 'react-router-dom';





function Examples() {
  return (
    <>
        <ExampleNav/>
        <div className='tutorial-subnav'>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..."/>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            </div>
            <div className='nav-buttons'>
                <button className='nav-btn'>All</button>
                <button className='nav-btn'>Quarky</button>
                <button className='nav-btn'>evive</button>
                <button className='enroll-btn'>Ardunio Uno</button>
                <button className='nav-btn'>ESP32</button>
                <button className='nav-btn'>AI & ML</button>
                <button className='nav-btn'>Python</button>
                <button className='nav-btn'>WizBot</button>
                <Link to='/login' className='enroll-btn'>Enroll for Course</Link>
            </div>
        </div>
        <section className='tutorials'> 
            <div className="container">
                <div>
                    <div>
                        <Example/>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Examples;
