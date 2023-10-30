import React from 'react'

function Board() {
  return (
    <div>
      <div className='board-heading'> 
          <h3 className='b-h'>Select a Board</h3>
      </div>
      
      <div className='b-cards'>
          <div className='board-card'>
            <div>
              <img className='bcard-image' src="https://pictobloxonline-e872.kxcdn.com/static/assets/32bd336c44c65cf0276dec174f02e7a7.svg"/>
            </div>
            <div>
                <h className='bcard-title'>Evive</h>
            </div>
          </div>
      
          <div className='board-card'>
            <div>
              <img className='bcard-image' src="https://pictobloxonline-e872.kxcdn.com/static/assets/fd7c1b2b7f040d4f244764678bb9bb0c.svg"/>
            </div>
            <div>
                <h className='bcard-title'>Quarky</h>
            </div>
          </div>

          <div className='board-card'>
            <div>
              <img className='bcard-image' src="https://pictobloxonline-e872.kxcdn.com/static/assets/81d04c81f7b13392b1c193ae34036c13.svg"/>
            </div>
            <div>
                <h className='bcard-title'>Wizbot(Alpha)</h>
            </div>
          </div>
      
      </div>

      <div className='b-cards'>
          <div className='board-card'>
            <div>
              <img className='bcard-image' src="https://pictobloxonline-e872.kxcdn.com/static/assets/0ad6fd3eb017e3ccd5d1fd4aa8ebb81e.svg"/>
            </div>
            <div>
                <h className='bcard-title'>Ardunio Uno</h>
            </div>
          </div>
      
          <div className='board-card'>
            <div>
              <img className='bcard-image' src="https://pictobloxonline-e872.kxcdn.com/static/assets/d37de71660418efbef02f875eeb47ad9.svg"/>
            </div>
            <div>
                <h className='bcard-title'>Ardunio Mega</h>
            </div>
          </div>

          <div className='board-card'>
            <div>
              <img className='bcard-image' src="https://pictobloxonline-e872.kxcdn.com/static/assets/dcac56b25a06a2460ca68806dce711b9.svg"/>
            </div>
            <div>
                <h className='bcard-title'>Ardunio Nano</h>
            </div>
          </div>
      
      </div>
    </div>
  )
}

export default Board;