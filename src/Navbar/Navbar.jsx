import React from 'react'
import navbarimage from '../assets/Postit 1.svg'
import  '../styles/Navbar.css';
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div className='container pt-5 d-flex justify-content-between'>
            <div>
              <Link to='/'>
            <img src={navbarimage} alt="postit image" />
            </Link>
            </div>
            <div className=' d-flex  gap-4 '>
                <Link to={`/Stories`} className='sign link-color'>
                <h5>Stories</h5>
                </Link>
                <Link to={`/Contact`} className='sign link-color'>
                <h5>Contact</h5>
                </Link>
                <Link to={`/SignIn`} className='sign link-color'>
                <h5>Sign In</h5>
                </Link>
                <Link to={`/GetStarted`}>
                <button className='btn btn text-light bg-primary rounded'>Get Started</button>
                </Link>
            </div>
            </div>
            <Outlet/>
    </div>
  )
}

export default Navbar




 //   <Link to="/">
  //   <img src={image} alt="logo1" />
  // </Link>
  // <div>
  //   <ul className="d-flex align-items-center list-unstyled gap-3 ul-1">
  //     <Link to={`/newtask`}>
  //       <li className="ul-2">New Task</li>
  //     </Link>
  //     <Link to={`/alltask`}>
  //       <li className="ul-2">All Tasks</li>
  //     </Link>

  // <Body/>
  //   <Section/>
  //   <Section2/>