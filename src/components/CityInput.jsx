import { useState, useContext } from "react";
import WeatherContext from "../context/weather";

const CityInput = () => {
  const [formInput, setFormInput] = useState("");
  const { getWeatherData } = useContext(WeatherContext);

  const handleForm = (e) => {
    if (e.target.value !== " ") {
      setFormInput(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getWeatherData(formInput);
    setFormInput("");
  };
  return (
    <>
      <form className="font-normal w-full relative" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={formInput}
          className="py-2.5 rounded-md bg-[#f3f7f7] placeholder:text-black outline-none w-full pl-4 pr-10"
          required
          onChange={handleForm}
        />
        <span
          className="absolute right-4 top-2.5 cursor-pointer text-gray-600"
          onClick={handleSubmit}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </form>
    </>
  );
};

export default CityInput;
