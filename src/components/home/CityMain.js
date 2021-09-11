import React from 'react';
import { useSelector } from 'react-redux';
import spain from './spain.png';
import './Main.css';

const CityMain = () => {
  const cityDetails = useSelector((state) => state.cities);
  const setCity = useSelector((state) => state.city);
  const city = cityDetails.filter((elem) => elem.name === setCity);

  return (
    <div>
      <main>
        <img className="main-image" src={spain} alt="Spain" />
        <div className="main-content">
          <h3 className="main-content-title">{city[0].name}</h3>
          <p className="main-content-text">{city[0].temp}</p>
        </div>
      </main>
    </div>
  );
};

export default CityMain;
