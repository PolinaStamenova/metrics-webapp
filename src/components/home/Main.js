/* eslint-disable quotes, jsx-quotes */

import React from "react";
import spain from "./spain.png";
import "./Main.css";

const Main = () => (
  <div>
    <main>
      <img className='main-image' src={spain} alt='Spain' />
      <div className='main-content'>
        <h3 className='main-content-title'>Spain</h3>
        <p className='main-content-text'>26.22 °C</p>
      </div>
    </main>
  </div>
);

export default Main;
