import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    
    <div className="footer1  pt-5 mt-5">

      <div className="container">
        <div className="container row ">
            <div className=" col-4">
        <h2 className="text-light pt-5">
          About Post<span className="text-primary">it</span>
        </h2>
        <p className=" text-light ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis
          in accusamus exercitationem fugit consectetur voluptas mollitia, ut
          molestias maiores labore nisi sit pariatur vitae rerum iure possimus
          minus! Voluptatem fuga molestias, libero possimus asperiores
          architecto.
        </p>
        </div>
     
      <div className=" pt-5 col-2">
        <h2 className="text-light">Quick Menu</h2>
        <p className="text-light">Home</p>
        <p className="text-light">Stories</p>
        <p className="text-light">Trending Stories</p>
        <p className="text-light">Popular Stories</p>
      </div>
      <div className="col-2 pt-5">
        <p className="text-light pt-5">Sign Up</p>
        <p className="text-light">Log In</p>
        <p className="text-light">Contact Us</p>
      </div>
      <div className="col-4 pt-5">
        <p className="text-light fw-bold fs-5">Suscribe To Our Newsletter</p>
        <input type="text"  className=' output'/>
                <button className='btn btn text-light bg-primary rounded'>Get Started</button>
                
      </div>
      
      <hr className="container text-light"/>
      <div className="">
      <p className="container d-flex justify-content-end text-light">Terms and Policy</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
