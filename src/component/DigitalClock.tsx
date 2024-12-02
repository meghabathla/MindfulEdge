import { useEffect, useState } from "react";

const TIME_CONFIG: DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
};
const getCurrentTime = () => {
  return new Date()
    .toLocaleTimeString("en-US", TIME_CONFIG)
    .replace("AM", "")
    .replace("PM", "");
};

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime);

  const updateTime = () => {
    const time = getCurrentTime();

    setCurrentTime(time);
  };
  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  return <span className="home_text text_large">{currentTime}</span>;
};

export default DigitalClock;
