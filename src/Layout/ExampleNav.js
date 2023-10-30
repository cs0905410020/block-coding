import React from 'react';
import ArrowLeft from "../images/arrowleft.png";



function ExampleNav() {
  return (
    <nav className='navbar'>
        <div>
              <button className='back-btn' href="/">
                  <img src={ArrowLeft} className='arrow-left' />
              </button>
        </div>
            <a href='/' className='a'><h3 className='tut-heading'>Back</h3></a>
            <h4 className='tut-head'>Choose an Example</h4>
        <div>
        </div>
    </nav>
  );
}

export default ExampleNav;
