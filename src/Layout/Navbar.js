import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faGlobe, faFloppyDisk, faMessage } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <nav className='navbar'>
        <img href='/' className='nav-logo' src='https://shikshaksolutions.com/static/media/logo2.2d5fd5effc6e228891809bb238e64e17.svg' alt="" />
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">File</a>
          <ul className="nav-item-menu">
          <li><a href="#">New</a></li>
          <li><a href="#">Load from Your Computer</a></li>
          <li><a href="#">Save to Your Computer</a></li>
          <li><a href="#">File Sharing</a></li>
          <li><a href="#">Open File from Link</a></li>
          <li><a href="#">Open File from QR Codes</a></li>
          <li><a href="/examples">Examples</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#">Edit</a>
          <ul className="nav-item-menu">
          <li><a href="#">Restore</a></li>
          <li><a href="#">Undo</a></li>
          <li><a href="#">Redo</a></li>
          </ul>
        </li>
        <li className="nav-item"><a href="/tutorials">Tutorials</a></li>
        <li className="nav-item"><a href="/board">Board</a></li>
        <li className="nav-item">
          <a href="#">Connect</a>
          <ul className="nav-item-menu">
          <li><a href="#">Serial</a></li>
          <li><a href="#">Bluetooth</a></li>
          </ul>
        </li>
        <li className="nav-item"><input className='project-tittle' type="" placeholder='Project Name'></input></li>
        <FontAwesomeIcon className='icon' icon={faFloppyDisk}/>
      </ul>
      <ul className="nav-list1">
        <FontAwesomeIcon className='icon' icon={faMessage}/>
        <FontAwesomeIcon href='/download' className='icon' icon={faGear}/>
        <FontAwesomeIcon className='icon' icon={faGlobe} />
        <li className="nav-item"><a href="/login">Sign In</a></li>
      </ul>
    
    </nav>
  );
}

export default Navbar;
