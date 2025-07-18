import { createContext, useEffect, useState } from "react";

export type UseFocusContextType = {
  flag: boolean;
  clearIntervalID: any;
  timecalculated: number;
  percentage: number;
  setFlag: (flag: boolean) => void;
  focusSessions: { timestamp: string; duration: number }[];
  setFocusSessions: (
    sessions: { timestamp: string; duration: number }[]
  ) => void;
  setClearIntervalID: (clearIntervalID: any) => void;
};
export const UseFocusContext = createContext({
  flag: false,
  clearIntervalID: null,
  percentage: 0,
  focusSessions: [],
  setFocusSessions: () => {},
  setFlag: () => {},
  setClearIntervalID: () => {},
});

const TOTAL_DURATION = 60 * 60;
export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [flag, setFlag] = useState(false);
  const [clearIntervalID, setClearIntervalID] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [focusSessions, setFocusSessions] = useState<
    {
      timestamp: string;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev >= TOTAL_DURATION) {
          clearInterval(interval);
          return TOTAL_DURATION;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);
  // flag, clearIntervalID, timecalculated
  const percentage = (elapsedTime / TOTAL_DURATION) * 100;

  return (
    <UseFocusContext.Provider
      value={{
        flag,
        clearIntervalID,
        percentage,
        setFlag,
        focusSessions,
        setFocusSessions,
        setClearIntervalID,
      }}
    >
      {children}
    </UseFocusContext.Provider>
  );
};
