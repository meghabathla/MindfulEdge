import { createContext, useContext } from "react";
import { UseFocusContextType } from "./FocusContext.types";

export const FocusContext = createContext<UseFocusContextType>({
  flag: false,
  clearIntervalID: null,
  percentage: 0,
  focusSessions: [],
  setFocusSessions: () => {},
  setFlag: () => {},
  setClearIntervalID: () => {},
});

export const useFocusContext = () => {
  return useContext(FocusContext);
};


