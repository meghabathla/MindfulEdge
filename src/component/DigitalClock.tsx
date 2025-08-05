import { useEffect, useState } from "react";

const TIME_CONFIG = {
  hour: "2-digit",
  minute: "2-digit",
} as const;

const getCurrentTime = () => {
  return new Date()
    .toLocaleTimeString("en-US", TIME_CONFIG)
    .replace("AM", "")
    .replace("PM", "");
};

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const updateTime = () => {
    const time = getCurrentTime();
    setCurrentTime(time);
  };

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className=" text_large">{currentTime}</span>;
};

export default DigitalClock;
