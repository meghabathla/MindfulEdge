import { useState, useMemo, useRef } from "react";
import { FocusContext } from "./FocusContext";

const TOTAL_DURATION = 1800; // 3600 seconds = 1 hour

const isSameDate = (date: Date): boolean => {
  const currentDate = new Date();
  const isDateSame = currentDate.getDate() === date.getDate();
  const isMonthSame = currentDate.getMonth() === date.getMonth();
  const isYearSame = currentDate.getFullYear() === date.getFullYear();

  if (isDateSame && isMonthSame && isYearSame) {
    return true;
  }
  return false;
};

const getFocusTodayFromLocalStorage = () => {
  const storedFocusValue = localStorage.getItem("focusToday");

  const FocusTodayObj = {
    focusTime: "2000",
    date: new Date(),
  };

  if (FocusTodayObj && !isNaN(Number(FocusTodayObj.focusTime))) {
    if (isSameDate(FocusTodayObj.date)) {
      return Number(FocusTodayObj.focusTime);
    }
  }

  return 0;
};
export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalFocusToday, setTotalFocusToday] = useState(
    getFocusTodayFromLocalStorage
  );
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
