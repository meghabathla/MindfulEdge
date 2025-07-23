import { useEffect, useState, useMemo } from "react";
import { FocusSession } from "./FocusContext.types";
import { FocusContext } from "./FocusContext";

const TOTAL_DURATION = 1800; // 3600 seconds = 1 hour

export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [flag, setFlag] = useState(false);
  const [clearIntervalID, setClearIntervalID] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0); // in seconds & max is 1 hour
  const [focusSessions, setFocusSessions] = useState<FocusSession[]>([]);

  useEffect(() => {
    // Start an interval until elapsedTime reaches 1 hour
    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev >= TOTAL_DURATION) {
          clearInterval(interval);
          return TOTAL_DURATION;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // flag, clearIntervalID
  const percentage = useMemo(
    () => (elapsedTime / TOTAL_DURATION) * 100,
    [elapsedTime]
  );

  return (
    <FocusContext.Provider
      value={{
        elapsedTime,
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
    </FocusContext.Provider>
  );
};
