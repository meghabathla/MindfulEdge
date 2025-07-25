import { useState, useMemo, useRef } from "react";
import { FocusContext } from "./FocusContext";

const TOTAL_DURATION = 1800; // 3600 seconds = 1 hour
const storedFocusTodayValue = () => {
  const storedFocusValue = localStorage.getItem("focusToday");
  return storedFocusValue ? Number(storedFocusValue) : 0;
};
export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalFocusToday, setTotalFocusToday] = useState(storedFocusTodayValue);
  const [timeLeft, setTimeLeft] = useState(TOTAL_DURATION); // 30mins
  const intervalID = useRef<number>();
  const isFocusing = useMemo(() => Boolean(intervalID.current), [intervalID]);

  const startFocus = () => {
    if (intervalID.current) {
      return console.log(" focus mode is already exit or started");
    }
    const interval = setInterval(() => {
      setTimeLeft((prevtimerleft) => prevtimerleft - 1);

      setTotalFocusToday((prevTotalFocusToday) => {
        const totalFocusValue = prevTotalFocusToday + 1;
        localStorage.setItem("focusToday", JSON.stringify(totalFocusValue));
        return totalFocusValue;
      });
    }, 1000);
    intervalID.current = interval;
  };
  //
  const stopFocus = () => {
    if (!intervalID.current) {
      return console.log("Focus mode has not started yet");
    }
    clearInterval(intervalID.current);
    intervalID.current = undefined;
  };

  const restartFocus = () => {
    if (intervalID.current) {
      stopFocus();
    }
    setTimeLeft(TOTAL_DURATION);
    startFocus();
  };

  // flag, clearIntervalID
  const percentage = useMemo(() => {
    const elapsedTime = TOTAL_DURATION - timeLeft;
    return (elapsedTime / TOTAL_DURATION) * 100;
  }, [timeLeft]);

  return (
    <FocusContext.Provider
      value={{
        isFocusing,
        timeLeft,
        percentage,
        totalFocusToday,
        setTotalFocusToday,
        startFocus,
        stopFocus,
        restartFocus,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};
