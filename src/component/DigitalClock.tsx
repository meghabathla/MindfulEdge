import { useEffect, useState } from "react";

const TIME_CONFIG = {
  hour: "2-digit" as const,
  minute: "2-digit" as const,
};

const getCurrentTime = () => {
  return new Date()
    .toLocaleTimeString("en-US", TIME_CONFIG)
    .replace("AM", "")
    .replace("PM", "");
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime);
  // const {} = useFocusContext();

  const updateTime = () => {
    const time = getCurrentTime();
    setCurrentTime(time);
  };

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show timer when in focus mode and timer is running, otherwise show current time
  const displayText = "displayText";
  // isPlaying && !isBreakMode ? formatTime(elapsedTime) : currentTime;

  return <span className="text_large">{displayText}</span>;
};

export default DigitalClock;
