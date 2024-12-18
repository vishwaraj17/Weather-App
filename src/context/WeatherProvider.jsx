import WeatherContext from "./weather";
import { useEffect, useState } from "react";

const getUVraysIndex = (uv) => {
  if (uv <= 2) {
    return {
      index: "Low",
      color: "#6ae17c",
    };
  } else if (uv <= 5) {
    return {
      index: "Moderate",
      color: "#CCE16A",
    };
  } else if (uv <= 7) {
    return {
      index: "High",
      color: "#d4b814",
    };
  } else if (uv <= 10) {
    return {
      index: "Very High",
      color: "#d43114",
    };
  } else {
    return {
      index: "Extreme",
      color: "#dc15cf",
    };
  }
};

const getForecast = (data) => {
  const forecast = [];
  data.map((item) => {
    forecast.push({
      icon: item.day.condition.icon,
      text: item.day.condition.text,
      temp: `${item.day.maxtemp_c}°C/ ${item.day.mintemp_c}°C`,
      date: item.date,
    });
  });
  return forecast;
};

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({
    temperature: 0,
    sunrise: "",
    sunset: "",
    weatherDesc: "",
    pressure: "",
    visibility: "",
    humidity: "",
    uvRays: "",
    aqi: 0,
    uvRaysIndex: { index: "", color: "" },
    forecast: [],
    dayReport: [],
    location: { name: "", region: "", country: "" },
  });

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getWeather = async (city = "Ahmedabad") => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=5eec4f4a41db41c685f125012241812&q=${city}&days=3&aqi=yes&alerts=no`
      );
      const data = await response.json();
      setWeather({
        temperature: data.current.temp_c,
        weatherDesc: data.current.condition.text,
        pressure: data.current.pressure_mb + " mb",
        visibility: data.current.vis_km + " km",
        humidity: data.current.humidity + " %",
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
        uvRays: data.current.uv + " UVI",
        aqi: Math.round(data.current.air_quality.pm2_5),
        uvRaysIndex: getUVraysIndex(data.current.uv),
        forecast: getForecast(data.forecast.forecastday),
        dayReport: data.forecast.forecastday[0].hour,
        location: {
          name: data.location.name,
          region: data.location.region,
          country: data.location.country,
        },
      });
    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  const weatherData = {
    getWeatherData: getWeather,
    weather: weather,
    loading: loading,
    isError: isError,
  };

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
