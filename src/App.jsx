import { useState, useContext } from "react";
import WeatherContext from "./context/weather";
import {
  Navbar,
  CityLocation,
  CityInput,
  MeasureCard,
  TemperatureCard,
  Loader,
} from "./components/components";
import ErrorBox from "./components/ErrorBox";

const App = () => {
  const [isMenuBar, setIsMenuBar] = useState(false);
  const toggleMenuBar = () => {
    setIsMenuBar(!isMenuBar);
  };

  const { weather, loading, isError } = useContext(WeatherContext);

  return (
    <>
      {/* main Container */}
      {loading ? <Loader /> : null}
      {isError ? <ErrorBox /> : null}
      <div
        className={`grid md:grid md:grid-cols-[2fr_1fr] lg:grid-cols-[4fr_1.25fr] ${
          isMenuBar ? "hidden" : ""
        }`}
      >
        {/* Left Container */}
        <div className="overflow-hidden">
          {/* Left Navbar */}
          <div className="p-5 font-medium flex flex-col-reverse xsm:flex-row justify-between xsm:items-center h-fit gap-2">
            <CityLocation />
            <div className="hidden md:block w-5/12">
              <CityInput />
            </div>
            <div className="flex items-center gap-4 xsm:gap-2 md:hidden">
              <CityInput />
              <div
                className="md:hidden text-3xl cursor-pointer"
                onClick={toggleMenuBar}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>

          {/* Card Section */}
          <div className="mt-5 px-5 flex flex-col lg:flex-row items-center justify-evenly gap-5">
            {/* Card 1 */}
            <div className="w-full p-5 rounded-3xl bg-gradient-to-br from-cyan-200 to-red-200 flex flex-col gap-4 shadow-lg shadow-slate-500 xsm:h-[300px]">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-full w-10 h-10 text-center p-2">
                  <i className="fa-solid fa-cloud" aria-hidden="true"></i>
                </div>
                <div>
                  <h2 className="font-semibold">weather</h2>
                  <p>what's weather today.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-5xl my-2">
                  {weather.temperature || "33.33"}°<code>c</code>
                </h3>
                <p className="font-medium">{weather.weatherDesc}</p>
              </div>
              <div className="flex flex-wrap xsm:flex-nowrap items-center justify-between gap-2">
                <MeasureCard
                  classes={`bg-slate-800 text-white`}
                  measure={"pressure"}
                  value={weather.pressure}
                />
                <MeasureCard
                  classes={`bg-emerald-600 text-white`}
                  measure={"visibility"}
                  value={weather.visibility}
                />
                <MeasureCard
                  classes={`bg-white`}
                  measure={"humidity"}
                  value={weather.humidity}
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full p-5 rounded-3xl bg-gradient-to-br from-cyan-200 to-cyan-50 flex flex-col gap-5 h-[300px] shadow-lg shadow-slate-500 justify-center">
              {/* Small Card 1 */}
              <div className="bg-slate-800 text-white rounded-xl p-5">
                <h2 className="text-sm">Sunrise & Sunset</h2>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🌄</span>
                    <div>
                      <p className="text-sm">Sunrise</p>
                      <p className="font-medium">
                        {weather.sunrise || "06:00 AM"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🌆</span>
                    <div>
                      <p className="text-sm">Sunset</p>
                      <p className="font-medium">
                        {weather.sunset || "06:00 PM"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className="bg-slate-800 text-white rounded-xl p-5 flex items-center">
                <span className="text-3xl">🔆</span>
                <div className="flex flex-col ml-2">
                  <p className="text-sm">
                    {weather.uvRays}
                    <button
                      className="py-2 px-4 rounded-full text-black font-medium cursor-default ml-2"
                      style={{ backgroundColor: weather.uvRaysIndex.color }}
                    >
                      {weather.uvRaysIndex.index}
                    </button>
                  </p>
                  <p className="font-medium">
                    {weather.uvRaysIndex.index} risk of UV rays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Temperature Section */}
          <div className="p-5">
            <div className="text-2xl mt-5 font-medium">
              How's the temperature today at?
            </div>
            {/* Today's tempersture report */}
            <div className="mt-5 rounded-3xl bg-gradient-to-br from-cyan-200 to-sky-200 grid grid-cols-[repeat(12,1fr)] p-5 gap-5 overflow-scroll scrollbar-none">
              {weather.dayReport.map((item, index) => (
                <TemperatureCard
                  key={index}
                  time={item.time.split(" ")[1]}
                  img={item.condition.icon}
                  temperature={item.temp_c}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <Navbar />
        </div>
      </div>
      {/* OnToggleMenu */}
      <div className={`md:hidden relative ${isMenuBar ? "block" : "hidden"}`}>
        <div
          className="md:hidden text-3xl cursor-pointer absolute right-5 top-8"
          onClick={toggleMenuBar}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <Navbar />
      </div>
      {/* Footer */}
      <div className="bg-slate-800 text-white p-5 text-center">
        Copyright &copy; {new Date().getFullYear() || 2024} | Created by{" "}
        <div
          target="_blank"
          className="text-sky-200"
        >
          Vishwaraj Pathak
        </div>
      </div>
    </>
  );
};

export default App;
