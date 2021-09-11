/* eslint-disable quotes, jsx-quotes, no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SectionCards.css";
import HomeCards from "./HomeCards";

const SectionCards = () => {
  const citiesData = useSelector((state) => state.cities);

  return (
    <section className='section-cities'>
      <h5 className='section-cities-title'>Status by cities</h5>
      <ul className='cards-list'>
        {citiesData.map((city) => (
          <Link className='link' to={`/city/${city.name}`} key={city.id}>
            <HomeCards
              name={city.name}
              temp={city.temp}
              key={city.id}
              id={city.id}
            />
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default SectionCards;
