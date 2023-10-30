import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ExtensionNav from '../Layout/ExtensionNav';
import { Link } from 'react-router-dom';
import Extension from '../components/Extension/Extension';





function Extensions() {
  return (
    <>
        <ExtensionNav/>
        <div className='tutorial-subnav'>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..."/>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            </div>
            <div className='nav-buttons'>
                <button className='nav-btn'>All</button>
                <button className='nav-btn'>AI & ML</button>
                <button className='nav-btn'>Hardware</button>
                <button className='nav-btn'>Robots</button>
                <button className='nav-btn'>IOT</button>
                <button className='enroll-btn'>Games & Animation</button>
                <Link to='/login' className='enroll-btn'>Read Documentation</Link>
            </div>
        </div>
        <section className='tutorials'> 
            <div className="container">
                <div>
                    <div>
                        <Extension/>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Extensions;
