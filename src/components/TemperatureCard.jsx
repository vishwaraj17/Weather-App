import React from "react";

const TemperatureCard = ({ time, img, temperature }) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center font-medium gap-1 rounded-xl text-base bg-white w-28 p-2 shadow-md shadow-slate-300">
        <p>{time}</p>
        <img src={img} alt="weather" className="w-10" />
        <p>{temperature}</p>
      </div>
    </>
  );
};

export default TemperatureCard;
