/* eslint-disable quotes, jsx-quotes, no-unused-vars */

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadApi } from "./redux/Reducer";

const Test = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const url = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "7d21fcc19d2a5ea9e47384b584b78a2e";

  const city = "Berlin";

  const fetchApi = async () => {
    const data = await axios
      .get(`${url}q=${city}&appid=${apiKey}`)
      .then((res) => res.data)
      .catch((error) => error);
    console.log(data);
    console.log(typeof data);

    dispatch(loadApi(data));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <div>Jessie</div>
    </div>
  );
};

export default Test;
