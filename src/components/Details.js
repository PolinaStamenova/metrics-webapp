/* eslint-disable quotes, jsx-quotes */

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Details.css";
import CityMain from "./home/CityMain";
import City from "./home/City";

const Details = () => {
  const cityDetails = useSelector((state) => state.cities);
  const setCity = useSelector((state) => state.city);
  const city = cityDetails.filter((elem) => elem.name === setCity);
  console.log(city);
  console.log("============");

  console.log(setCity);
  console.log("============");

  console.log(cityDetails);

  return (
    <div>
      <header>
        <nav>
          <Link className='link' to='/' key='pppp'>
            <p className='nav-arrow'> &#60; </p>
          </Link>
          <p className='nav-title'>town/city weather</p>
          <div className='nav-icons'>
            <i className='fas fa-microphone' />
            <i className='fas fa-cog' />
          </div>
        </nav>
      </header>
      <CityMain />
      <h5 className='section-cities-title'>Weather details by city</h5>
      <City />
    </div>
  );
};

export default Details;
