import React from 'react'
import NavBar from "../Layout/Navbar";
import Board from '../components/Board/Board';




function Boards() {
  return (
    <>
        <NavBar />
        <section className='signin'> 
            <div className="form-container">
                    <div className="board-box">
                        <Board/>
                    </div>
            </div>
        </section>
        </>
  )
}

export default Boards;
