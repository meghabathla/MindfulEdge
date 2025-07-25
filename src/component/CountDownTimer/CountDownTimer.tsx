import "./CountDownTimer.css";
import { useFocusContext } from "../../store/FocusContext/FocusContext";

const CountDownTimer = () => {
  const { timeLeft } = useFocusContext();
  const calculateTimeLeft = (timeLeft: number) => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0"); // 30: 00 mins
    const seconds = String(timeLeft % 60).padStart(2, "0"); // 3 : 4 --> 03: 04 seconds
    return `${minutes}:${seconds}`;
  };

  return <div className="text_large">{calculateTimeLeft(timeLeft)}</div>;
};

export default CountDownTimer;
