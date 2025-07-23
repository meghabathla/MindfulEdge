import { useEffect, useState } from "react";
import "./CountDownTimer.css";

const CountDownTimer = () => {
  const [timerLeft, setTimerLeft] = useState(1800);

  useEffect(() => {
    if (timerLeft <= 0) return;
    const interval = setInterval(() => {
      setTimerLeft(timerLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerLeft]);

  const calculateTimeLeft = (timeLeft: number) => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return <div className="text_large">{calculateTimeLeft(timerLeft)}</div>;
};

export default CountDownTimer;
