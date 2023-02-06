import React from "react";
import {FaEnvelope,FaFacebook,FaGoogle,FaInstagram,FaKey, FaLinkedin} from 'react-icons/fa'


function Login(){
    return(
        <div className="app">
             {/* <h1>Dynamic Login Form</h1> */}
      <div className='main'>
        <form className='form'>
          <label><FaEnvelope/> Email:</label><br/>
          <input type={'email'}/><br/><br/>
          <label><FaKey/> Password:</label><br/>
          <input type={'password'}/><br/><br/>
          <button>Sign In</button><br/>
          <p>Don't have  account <span><a href='google.com'>Sign Up Here</a></span></p>
        <div className='fa'>
          <FaFacebook/>
          <FaGoogle/>
          <FaLinkedin/>  
          <FaInstagram/>
        </div>
        </form>
      </div>
        </div>
    )
}
export default Login;