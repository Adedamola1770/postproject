import React from 'react'
import '../styles/GetStarted.css'
import join from '../assets/Join Postit..svg'

const GetStarted = () => {
  return (
    <div>
        <div className='get'>
        <div className='text-center pt'>
        <img src={join} alt="" />
        <p className='pt-4 fs-4'>Enter your email address to create an account on Post<span className='text-primary'>it.</span></p>
        <p className='fw-bold fw-bold user'>Username:</p>
        <input type="text" className='w-50 '/>
        <p className='pt-4 fw-bold user'>Your email address:</p>
        <input type="email" className='w-50 '/>
        <p className='pt-4 fw-bold user'>Password:</p>
        <input type="email" className='w-50 '/><br />
        <button className="btn btn text-light bg-primary rounded mt-5 w-50 fw-bold user ">
            Continue.
          </button>
          <p className='pt-4 fw-bold'>Already have an account? <span className='text-primary'>Sign In</span></p>
        </div>
        </div>
    </div>
  )
}

export default GetStarted