/* eslint-disable quotes, comma-dangle */

import axios from "axios";

const Test = () => {
  const url = "https://api.openweathermap.org/data/2.5/find?";
  const apiKey = "3d4b1932841f45e369d9c03b24936231";
  const city = "Berlin";

  const fetchApi = async () => {
    const data = await axios
      .get(`${url}q=${city}&appid=${apiKey}`)
      .then((res) => res.data.list[1].weather[0].description)
      .catch((error) => error);
    console.log(data);
  };
  fetchApi();
  return (
    <div>
      <div>Jessi</div>
    </div>
  );
};

export default Test;
