/* eslint-disable quotes, jsx-quotes */

import React from "react";
import { useSelector } from "react-redux";
import CityDetails from "./CityDetails";

const City = () => {
  const cityDetails = useSelector((state) => state.cities);

  return (
    <section className='section-city'>
      <ul className='city-cards-list'>
        {cityDetails.map((elem) => (
          <CityDetails
            key={elem.id}
            tempMin={elem.tempMin}
            tempMax={elem.tempMax}
            description={elem.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default City;
