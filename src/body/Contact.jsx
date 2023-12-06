import React from 'react'
import '../styles/Contact.css'
import { Link, Outlet } from "react-router-dom";
import contacts from '../assets/contact us page.jpg'

const Contact = () => {
  return (
    <div>
        <div className='pt-4'>
        <img src={contacts} alt="" className='w-100'/>
        </div>
    </div>
  )
}

export default Contact