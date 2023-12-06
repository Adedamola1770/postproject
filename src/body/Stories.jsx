import React from 'react'
import '../styles/Stories.css'
import { Link, Outlet } from "react-router-dom";
import game from '../assets/game.svg'
import group1 from '../assets/Group 137.svg'
import group2 from '../assets/Group 138.svg'
import group3 from '../assets/Group 139.svg'
import group4 from '../assets/Group 140.svg'
import group5 from '../assets/Group 141.svg'
import group6 from '../assets/Group 142.svg'
import group7 from '../assets/Group 143.svg'
import group8 from '../assets/Group 144.svg'
import group9 from '../assets/Group 145.svg'
import group10 from '../assets/Group 146.svg'
import group11 from '../assets/Group 147.svg'
import group12 from '../assets/Group 148.svg'





const Stories = () => {
  return (
        <section>
    <div className='rectangle2'>
        <div className=" container mt-4 d-flex justify-content-between align-items-center">
        <div className="">
          <h2 className="fw-bold">You've got a story,</h2>
          <h2 className='fw-bold'>Post<span className='text-primary'>it</span></h2>
          <p className="font">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Voluptatem
            voluptatibus amet labore. Officiis deserunt unde <br />commodi! Nisi
            dolore numquam rem odit.
          </p>
          <div className="button-1">
         
          </div>      
          </div>
        <div className="">
        <img src={game} alt="A scrabble game..." />
        </div>
        
      </div>
      <div className='container'>
        <Link to={'/ViewPost'}>
        <button className="btn btn text-light bg-primary rounded fw-bold user1 w-50">
            View Post
          </button>
          </Link>
        </div>
    </div>
    <div>
    <div className='container pt-5 images-1'>
        <img src={group1} alt=""/>
        <img src={group2} alt=""/>
        <img src={group3} alt=""/>
        </div>
        <div  className='container pt-5 images-1'>
            <img src={group4} alt="" />
            <img src={group5} alt="" />
            <img src={group6} alt="" />
        </div>
        <div>
        <div  className='container pt-5 images-1'>
            <img src={group7} alt="" />
            <img src={group8} alt="" />
            <img src={group9} alt="" />
        </div>
        <div>
        <div  className='container pt-5 images-1'>
            <img src={group10} alt="" />
            <img src={group11} alt="" />
            <img src={group12} alt="" />
        </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Stories