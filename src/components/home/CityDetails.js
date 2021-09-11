/* eslint-disable quotes, jsx-quotes, react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

const CityDetails = () => {
  const cityDetails = useSelector((state) => state.cities);
  const setCity = useSelector((state) => state.city);
  const city = cityDetails.filter((elem) => elem.name === setCity);

  return (
    <ul className='item-cards'>
      <li className='one-card'>{city[0].description}</li>
      <li className='one-card'>{city[0].tempMin}</li>
      <li className='one-card'>{city[0].tempMax}</li>
    </ul>
  );
};

export default CityDetails;
