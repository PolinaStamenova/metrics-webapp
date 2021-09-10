/* eslint-disable quotes, jsx-quotes, no-unused-vars, no-console, implicit-arrow-linebreak */

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadApi } from "./Reducer";
import HomeCards from "../components/home/HomeCards";

const Api = () => {
  const data = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const url = "https://api.openweathermap.org/data/2.5/find?";
  const apiKey = "7d21fcc19d2a5ea9e47384b584b78a2e";

  const cities = ["Madrid", "Barcelona", "Ibiza"];

  const request = (city) =>
    axios.get(`${url}q=${city}&units=metric&appid=${apiKey}`);

  const fetchApi = async () => {
    const axiosOulu = request(cities[0]);
    const axiosHelsinki = request(cities[1]);
    const axiosTornio = request(cities[2]);

    const city = await axios
      .all([axiosOulu, axiosHelsinki, axiosTornio])
      .then((res) => {
        res.forEach((item) => item.data.list[0].main.temp);
        const data = res.map((item) => ({
          name: item.data.list[0].name,
          temp: item.data.list[0].main.temp,
        }));

        dispatch(loadApi(data));
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {data.map((city) => (
        <HomeCards name={city.name} temp={city.temp} key={city.name} />
      ))}
    </div>
  );
};

export default Api;
