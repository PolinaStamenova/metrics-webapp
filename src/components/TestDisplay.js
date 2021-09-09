/* eslint-disable quotes, jsx-quotes */

import React from "react";
import PropTypes from "prop-types";

const TestDisplay = ({ name, temp }) => (
  <div>
    <p>{name}</p>
    <p>{temp}</p>
  </div>
);

TestDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

export default TestDisplay;
