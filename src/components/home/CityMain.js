/* eslint-disable quotes, jsx-quotes */

import React from "react";
import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
import spain from "./spainMap.png";
import "./Main.css";

const CityMain = () => {
  const cityDetails = useSelector((state) => state.cities);
  const setCity = useSelector((state) => state.city);
  const city = cityDetails.filter((elem) => elem.name === setCity);
  console.log(cityDetails[0].name === setCity);
  console.log(city);

  return (
    <div>
      <main>
        <img className='main-image' src={spain} alt='Spain map' />
        <div className='main-content'>
          <h1 className='main-content-title'>{city[0].name}</h1>
          <p className='main-content-text'>{city[0].temp}</p>
        </div>
      </main>
    </div>
  );
};
// CityMain.propTypes = {
//   name: PropTypes.string.isRequired,
//   temp: PropTypes.number.isRequired,
// };

export default CityMain;
