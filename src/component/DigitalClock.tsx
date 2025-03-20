import { useEffect, useState } from "react";

const TIME_CONFIG = {
  hour: "2-digit",
  minute: "2-digit",
};
const getCurrentTime = () => {
  return new Date()
    .toLocaleTimeString("en-US", TIME_CONFIG)
    .replace("AM", "")
    .replace("PM", "");
};

// export const getGreetMessage = ()=>{

// }

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime);

  const updateTime = () => {
    const time = getCurrentTime();
    setCurrentTime(time);
  };

  useEffect(() => {
    const timer = setInterval(updateTime, 1000); // why didn't we call getcurrentTime and setcurrentTime here?
    return () => clearInterval(timer);
  }, []);

  return <span className=" text_large">{currentTime}</span>;
};

export default DigitalClock;
