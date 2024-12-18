import { createContext } from "react";

const WeatherContext = createContext({
  getWeather: (city) => {},
  weather: {},
  loading: false,
  isError: false,
});

export default WeatherContext;
