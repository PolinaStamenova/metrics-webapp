/* eslint-disable quotes, jsx-quotes, react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

const CityDetails = () => {
  const cityDetails = useSelector((state) => state.cities);
  const setCity = useSelector((state) => state.city);
  const city = cityDetails.filter((elem) => elem.name === setCity);

  return (
    <li>
      <p>{city[0].description}</p>
      <div className='temperatures'>
        <p>{city[0].tempMin}</p>
        <p>{city[0].tempMax}</p>
      </div>
    </li>
  );
};

export default CityDetails;
