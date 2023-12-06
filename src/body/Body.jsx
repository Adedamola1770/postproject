import React from "react";
import "../styles/Body.css";
import Section from "./Section";
import Section2 from "./Section2";
import { Link, Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <div className=" back mt-3">
        <div className="container body">
          <h1>Stay Curious.</h1>
          <p className="d-flex justify-content-start pt-3">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Excepturi, corporis eligendi illo labore incidunt unde perspiciatis{" "}
            <br />
            facilis molestias quibusdam expedita perferendis?
          </p>
        </div>
        <div className="container">
          
         <Link to={`/GetStarted`}>
         <button className="btn btn text-light bg-primary rounded">
            
            Get Started.
          </button>
         </Link>
        </div>
      </div>
      <div className="mt-2">
        <Section />
      </div>
      <div>
        <Section2 />
      </div>
    </div>
  );
};

export default Body;
