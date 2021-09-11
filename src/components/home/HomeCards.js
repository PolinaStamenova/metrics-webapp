/* eslint-disable quotes, jsx-quotes, no-unused-vars, react/jsx-one-expression-per-line,  */

import React from "react";
import PropTypes from "prop-types";
import "./SectionCards.css";
import thermo from "./thermomet.png";

const HomeCards = ({ name, temp }) => (
  <li className='card'>
    <div className='card-images'>
      <img className='city-image' src={thermo} alt='Cityimage' />
      <i className='far fa-arrow-alt-circle-right fa-lg' />
    </div>
    <div className='card-content'>
      <h2 className='card-title'>{name}</h2>
      <p className='card-temp'>{temp} ℃</p>
    </div>
  </li>
);

HomeCards.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

export default HomeCards;
