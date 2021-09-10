/* eslint-disable quotes, jsx-quotes, no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

const HomeCards = ({ name, temp }) => (
  <li className='card'>
    <i className='fal fa-arrow-circle-right' />
    <p>{name}</p>
    <p>{temp}</p>
  </li>
);
HomeCards.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

export default HomeCards;
