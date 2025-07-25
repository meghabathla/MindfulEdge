import { Dispatch, SetStateAction } from "react";

export type UseFocusContextType = {
  percentage: number;
  timeLeft: number;
  isFocusing: boolean;
  totalFocusToday: number;
  setTotalFocusToday: Dispatch<SetStateAction<number>>;
  startFocus: () => void;
  stopFocus: () => void;
  restartFocus: () => void;
};
