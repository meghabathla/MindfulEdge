import { useState, useMemo, useRef, useEffect } from "react";
import { FocusContext } from "./FocusContext";
import {
  getFocusTodayFromLocalStorage,
  setFocusTodayInLocalStorage,
} from "../../util/focusTodayUtils";

const TOTAL_DURATION = 1800; // 3600 seconds = 1 hour

export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalFocusToday, setTotalFocusToday] = useState(0);
  // const [focusDate, setFocusDate] = useState(new Date());
  const intervalID = useRef<number>();
  const [timeLeft, setTimeLeft] = useState(TOTAL_DURATION); // 30mins
  const isFocusing = useMemo(() => Boolean(intervalID.current), [intervalID]);

  const startFocus = () => {
    if (intervalID.current) {
      return console.log(" focus mode is already exit or started");
    }
    const interval = setInterval(() => {
      setTimeLeft((prevtimerleft) => prevtimerleft - 1);

      setTotalFocusToday((prevTotalFocusToday) => {
        const totalFocusValue = prevTotalFocusToday + 1;

        setFocusTodayInLocalStorage(totalFocusValue);
        return totalFocusValue;
      });
    }, 1000);
    intervalID.current = interval;
  };

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

  useEffect(() => {
    const { focusTime } = getFocusTodayFromLocalStorage();
    setTotalFocusToday(focusTime);
    // setFocusDate(date);
  }, []);

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
