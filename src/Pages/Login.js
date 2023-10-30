import React from 'react'
import NavBar from "../Layout/Navbar";
import LoginForm from '../components/Login/LoginForm';
import LoginImage from '../components/Login/LoginImage';




function Login() {
  return (
    <>
        <NavBar />
        <section className='signin'> 
            <div className="form-container">
                <div className="sign_info">
                    <div className="login-box">
                        <div className="col-lg-5">
                            <LoginImage/>
                        </div>
                        <div>
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Login;
