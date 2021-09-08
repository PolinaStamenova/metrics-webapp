/* eslint-disable quotes, jsx-quotes, no-unused-vars, no-console */

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadApi } from "./redux/Reducer";

const Test = () => {
  const polina = useSelector((state) => state.polina);

  const dispatch = useDispatch();

  const url = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "7d21fcc19d2a5ea9e47384b584b78a2e";

  const cityAPI = ["London", "Berlin", "Manila"];

  const fetchApi = async () => {
    const city = await axios
      .get(`${url}q=${cityAPI}&appid=${apiKey}`)
      .then((res) => res.data);
    console.log(city);
    // const city = { name: "Polina" };

    dispatch(loadApi(city));
  };

  useEffect(() => {
    fetchApi();
    console.log("WORKS");
  }, []);

  console.log(polina);
  return <div>pppp</div>;
};

export default Test;
