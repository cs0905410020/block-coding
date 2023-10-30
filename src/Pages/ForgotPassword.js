import React from 'react'
import NavBar from "../Layout/Navbar";
import ForgotPasswordImage from '../components/ForgotPassword/ForgotPasswordImage';
import ForgotPasswordForm from '../components/ForgotPassword/ForgotPasswordForm';




function ForgotPassword() {
  return (
    <>
        <NavBar />
        <section className='signin'> 
            <div className="form-container">
                <div className="sign_info">
                    <div className="login-box">
                        <div className="col-lg-5">
                            <ForgotPasswordImage/>
                        </div>
                        <div>
                            <ForgotPasswordForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default ForgotPassword;
