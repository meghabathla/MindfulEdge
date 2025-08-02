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
  const [isFocusing, setIsFocusing] = useState(false);

  const startFocus = () => {
    if (intervalID.current) {
      console.log(" focus mode is already exit or started");
      return;
    }
    setIsFocusing(true);
    const interval = setInterval(() => {
      setTimeLeft((prevtimerleft) => prevtimerleft - 1);

      setTotalFocusToday((prevTotalFocusToday) => {
        const totalFocusValue = prevTotalFocusToday + 1;
        const value = setFocusTodayInLocalStorage(totalFocusValue);
        return value;
      });
    }, 1000);
    intervalID.current = interval;
  };

  const stopFocus = () => {
    if (!intervalID.current) {
      console.log("Focus mode has not started yet");
      return;
    }
    clearInterval(intervalID.current);
    intervalID.current = undefined;
    setIsFocusing(false);
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
