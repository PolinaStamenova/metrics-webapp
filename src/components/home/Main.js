/* eslint-disable quotes, jsx-quotes */

import React from "react";
import spain from "./spainMap.png";
import "./Main.css";

const Main = () => (
  <div>
    <main>
      <img className='main-image' src={spain} alt='Spain map' />
      <div className='main-content'>
        <h1 className='main-content-title'>Spain</h1>
        <p className='main-content-text'>Average temperature</p>
      </div>
    </main>
  </div>
);

export default Main;
