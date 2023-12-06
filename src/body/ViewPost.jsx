import React from 'react'
import '../styles/ViewPost.css'
import { Link, Outlet } from "react-router-dom";
import views from '../assets/Group 352.svg'


const ViewPost = () => {
  return (
    <div>
        <div className='container'>
        <img src={views} alt="" />
        </div>
    </div>
  )
}

export default ViewPost