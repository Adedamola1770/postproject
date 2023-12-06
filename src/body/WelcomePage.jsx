import React from "react";
import "../styles/WelcomePage.css";
import { Link, Outlet } from "react-router-dom";
import game from '../assets/game.svg'

const WelcomePage = () => {
  return (
    <div className="rectangle">
      <div className=" container mt-4 d-flex justify-content-between align-items-center">
        <div className="">
          <h2 className="fw-bold">Welcome Adedamola,</h2>
          <p className="font">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Voluptatem
            voluptatibus amet labore. Officiis deserunt unde <br />commodi! Nisi
            dolore numquam rem odit.
          </p>
          <div className="button-1">
          <Link to={'/CreateStoryPage'}>
          <button className="btn btn text-light bg-primary rounded fw-bold user1 ">
            My Stories
          </button>
          </Link>
          <button className="btn btn text-primary border-primary  rounded  fw-bold user1 ">
            Go To Feed
          </button>  
          </div>      
          </div>
        <div className="">
        <img src={game} alt="A scrabble game..." />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
