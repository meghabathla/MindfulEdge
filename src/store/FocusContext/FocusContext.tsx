import { createContext, useContext } from "react";
import { UseFocusContextType } from "./FocusContext.types";

export const FocusContext = createContext<UseFocusContextType>({
  percentage: 0,
  timeLeft: 0,
  isFocusing: false,
  totalFocusToday: 0,
  isOnFocusPage: false,
  setTotalFocusToday: () => {},
  startFocus: () => {},
  stopFocus: () => {},
  restartFocus: () => {},
  togglePageContent: () => {},
});

export const useFocusContext = () => {
  return useContext(FocusContext);
};
