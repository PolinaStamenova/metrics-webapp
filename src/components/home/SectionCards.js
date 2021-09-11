import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCity, setCateg } from '../../redux/Reducer';

import './SectionCards.css';
import HomeCards from './HomeCards';

const SectionCards = () => {
  const cityDetails = useSelector((state) => state.cities);
  const setCategory = useSelector((state) => state.category);

  const citiesData = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  function filterCity() {
    if (setCategory !== '') {
      return cityDetails.filter((elem) => setCategory === elem.name);
    }
    return cityDetails;
  }

  function categorySetter(cat) {
    dispatch(setCateg(cat));
  }

  return (
    <section className="section-cities">
      <h5 className="section-cities-title">Status by cities</h5>
      <select onChange={(e) => categorySetter(e.target.value)}>
        <option value="">--City--</option>
        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <ul className="cards-list">
        {filterCity().map((city) => (
          <Link
            className="link"
            to={`/city/${city.name}`}
            id={city.name}
            key={city.name}
            onClick={() => dispatch(setCity(city.name))}
          >
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
