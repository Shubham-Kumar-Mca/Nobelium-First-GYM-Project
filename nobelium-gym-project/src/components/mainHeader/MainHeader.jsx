import React from 'react';
import images from "../../../images/main_header.png";
import "./mainHeader.css";
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#1000DaysOfworkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam consectetur vero, sit ipsum debitis aspernatur accusamus, architecto atque recusandae labore minus a enim, deleniti laboriosam! Eveniet eos expedita iusto nisi.</p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={images} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader