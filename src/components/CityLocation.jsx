import { useContext } from "react";
import WeatherContext from "../context/weather";

const CityLocation = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <>
      <div>
        <h1 className="text-3xl">{weather.location.name}</h1>
        <p className="text-2xl">
          <span>📌</span> {weather.location.region}, {weather.location.country}
        </p>
      </div>
    </>
  );
};

export default CityLocation;
