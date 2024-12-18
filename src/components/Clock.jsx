import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  const dateFormatter = new Intl.DateTimeFormat("en-IN", options);

  setInterval(() => {
    setDateTime();
  }, 1000);

  const setDateTime = () => {
    const date = new Date();
    const dateString = dateFormatter.format(date);
    setCurrentTime(
      date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })
    );
    setCurrentDate(dateString);
  };

  useEffect(() => {
    setDateTime();
  }, []);
  return (
    <>
      <h1 className="font-semibold text-3xl">{currentTime}</h1>
      <p className="text-lg">{currentDate}</p>
    </>
  );
};

export default Clock;
