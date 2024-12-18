import { useContext } from "react";
import { Clock } from "./components";
import WeatherContext from "../context/weather";

const Navbar = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="bg-[#f3f7f7] p-5">
      <div className="pb-4">
        <Clock />
      </div>
      <div
        className="relative aspect-square bg-center backdrop-blur-sm my-4 p-4 rounded-lg w-full bg-cover"
        style={{ backgroundImage: "url(women_with_dog.jpg)" }}
      >
        <h3 className="font-semibold text-2xl my-2">Air Quality</h3>
        <p className="my-2">Main Pollutant: PM2.5</p>
        <div className="w-8/12 font-medium my-2 absolute bottom-4 left-4">
          <p className="text-2xl my-2">
            {weather.aqi} <span className="text-base">AQI</span>
          </p>
          <p>Standard</p>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="font-semibold text-2xl my-2">Weather Forecast</h3>
        <div className="cards-container flex flex-col gap-4 pt-2">
          {weather.forecast.map((item, index) => (
            <div
              className="card grid grid-cols-[1fr_2fr_1fr] bg-white rounded-2xl p-2 py-4 text-xl shadow-lg shadow-gray-400 items-center gap-2"
              key={index}
            >
              <div>
                <img src={item.icon} alt={item.icon} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-gray-400 text-sm">{item.date}</div>
                <div className="font-semibold">{item.text}</div>
              </div>
              <div className="text-amber-500 font-semibold text-base">
                <div>{item.temp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
