/* eslint-disable quotes, jsx-quotes */

import React from "react";
import { useSelector } from "react-redux";
import spain from "./spainMap.png";
import "./Main.css";

const CityMain = () => {
  const city = useSelector((state) => state.cities);
  console.log(city);
  return (
    <div>
      <main>
        <img className='main-image' src={spain} alt='Spain map' />
        <div className='main-content'>
          <h1 className='main-content-title'>CITY NAME</h1>
          <p className='main-content-text'>CITY TEMP</p>
        </div>
      </main>
    </div>
  );
};

export default CityMain;
