/* eslint-disable quotes, jsx-quotes, no-unused-vars */

import React from "react";
import { useSelector } from "react-redux";
import "./SectionCards.css";
import HomeCards from "./HomeCards";
import Api from "../../redux/Api";

const SectionCards = () => {
  const citiesData = useSelector((state) => state.cities);

  return (
    <section className='section-cities'>
      <h5 className='section-cities-title'>Status by cities</h5>
      <ul>lll</ul>
    </section>
  );
};

export default SectionCards;

//  {/* {citiesData.map((city) => (
//           <HomeCards key={city.name} name={city.name} temp={city.temp} />
//         ))} */}
//         {/* <Api /> */}
