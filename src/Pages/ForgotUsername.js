import React from 'react'
import NavBar from "../Layout/Navbar";
import ForgotUsernameForm from '../components/ForgotUsername/ForgoUsernameForm';
import ForgotUsernameImage from '../components/ForgotUsername/ForgotUsernameImage';




function ForgotUsername() {
  return (
    <>
        <NavBar />
        <section className='signin'> 
            <div className="form-container">
                <div className="sign_info">
                    <div className="login-box">
                        <div className="col-lg-5">
                            <ForgotUsernameImage/>
                        </div>
                        <div>
                            <ForgotUsernameForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default ForgotUsername;
