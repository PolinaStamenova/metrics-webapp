/* eslint-disable quotes, jsx-quotes, no-unused-vars, no-console */

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadApi } from "./Reducer";

const Api = () => {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const url = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "7d21fcc19d2a5ea9e47384b584b78a2e";

  const cityAPI = "London";
  const countryAPI = "uk";

  const fetchApi = async () => {
    const city = await axios
      .get(`${url}q=${cityAPI},${countryAPI}&appid=${apiKey}`)
      .then((res) => res.data);
    console.log(city);

    dispatch(loadApi(city));
  };

  useEffect(() => {
    fetchApi();
    console.log("WORKS");
  }, []);

  console.log(data);
  return <div>{data.name}</div>;
};

export default Api;
