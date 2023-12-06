import React from 'react'
import join from '../assets/Join Postit..svg'
import '../styles/SignIn.css'
import WelcomePage from './WelcomePage'
import { Link, Outlet } from "react-router-dom";



const SignIn = () => {
  return (
    <div>
        <div className='get'>
        <div className='text-center pt'>
        
        <p className='pt-4 fs-4 fw-bold'>Welcome Back</p>
        
        <p className='pt-4 fw-bold user'>Your email address:</p>
        <input type="email" className='w-50 '/>
        <p className='pt-4 fw-bold user'>Password:</p>
        <input type="email" className='w-50 '/><br />
        <Link to={`/WelcomePage`}>
        <button className="btn btn text-light bg-primary rounded mt-5 w-50 fw-bold user ">
            Continue.
          </button>
          </Link>
          <p className='pt-4 fw-bold'>No Account? <span className='text-primary'>Sign Up</span></p>
        </div>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default SignIn