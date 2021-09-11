/* eslint-disable quotes, jsx-quotes */

import React from "react";
// import PropTypes from "prop-types";

import CityDetails from "./CityDetails";

const City = () => (
  <section className='section-city'>
    <ul className='city-cards-list'>
      <CityDetails />
    </ul>
  </section>
);

// City.propTypes = {
//   key: PropTypes.string.isRequired,
//   tempMin: PropTypes.number.isRequired,
//   tempMax: PropTypes.number.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default City;
