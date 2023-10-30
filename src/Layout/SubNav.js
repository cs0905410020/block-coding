import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';



function SubNav() {
  return (
    <nav className='sub-navbar'>
    <div>
        <li className='block-changer'>
            <div className='block-container'><img className='block-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/257e3788c5fbfe56c151a97e97dc20d8.svg'></img><span className='block-name'>Blocks</span></div>
            <div className='block-container'><img className='block-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/d33eeb57f7898efe3ff24d14891b9002.svg'></img><span className='block-name'>Pyhton</span></div>
            <div className='block-container'><img className='block-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/1dfe5425b42628b6f1df1f39e97a319f.svg'></img><span className='block-name'>Costumes</span></div>
            <div className='block-container'><img className='block-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/2258ea6dfe9ad15440ca55aca291698d.svg'></img><span className='block-name'>Sounds</span></div>
        </li>
    </div>
      
    <div>
      <ul className="subnav-list">
        <button className='rotate-btn'>
            <img className='rotate-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/42b7f9b5851525d9ea03c4fcdeb63b5b.svg'></img>
        </button>
        <button className='rotate-btn'>
            <img className='rotate-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/e64ea64d2d59c639cc6b752e9901805d.svg'></img>
        </button>
        <img className='rotate-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/2e0c4790f8f9cf28e3c346b9cef0fcb6.svg'></img>
        <img className='rotate-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/36fcc7dbca20720abcab01e49d4955f9.svg'></img>
        
        <div className="upload-container">
          <label for="firmware-upload" className="upload-button">
            <FontAwesomeIcon className='upload-icon' icon={faUpload}/> 
            Upload Firmware
        </label>
        <input type="file" id="firmware-upload" className="hidden"/>
        </div>
        <img className='rotate-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/fa9760cef0b3fd5f7c73f31e0fe49bb3.svg'></img>
        <img className='rotate-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/a246880e69bc7a2a793c90a2fb013ae1.svg'></img>
        <img className='rotate-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/51d228f5f5d5e42a252cc88210fd0cd2.svg'></img>
        <img className='rotate-icon' src='https://pictobloxonline-e872.kxcdn.com/static/assets/422b48c2206d5240a6717c92496ba21a.svg'></img>
      </ul>
    </div>
    
    </nav>
  );
}

export default SubNav;
