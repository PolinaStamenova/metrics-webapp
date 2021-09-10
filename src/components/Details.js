/* eslint-disable quotes, jsx-quotes */

import React from "react";
import { Link } from "react-router-dom";

const Details = () => (
  <div>
    <header>
      <nav>
        <Link className='link' to='/' key='pppp'>
          <p className='nav-arrow'> &#60; </p>
        </Link>
        <p className='nav-title'>town/city temperature</p>
        <div className='nav-icons'>
          <i className='fas fa-microphone' />
          <i className='fas fa-cog' />
        </div>
      </nav>
    </header>
    <h5 className='section-cities-title'>Temperature details by city</h5>
  </div>
);

export default Details;
