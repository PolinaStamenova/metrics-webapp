/* eslint-disable quotes, jsx-quotes, react/prop-types */
import React from "react";
import PropTypes from "prop-types";

const CityDetails = ({ tempMin, tempMax, description }) => (
  <li>
    <p>{description}</p>
    <div className='temperatures'>
      <p>{tempMin}</p>
      <p>{tempMax}</p>
    </div>
  </li>
);

CityDetails.propTypes = {
  tempMin: PropTypes.number.isRequired,
  tempMax: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default CityDetails;
