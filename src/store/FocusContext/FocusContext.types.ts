export type UseFocusContextType = {
  // Check why we need this flag
  flag: boolean;
  setFlag: (flag: boolean) => void;
  // For storing the interval ID
  clearIntervalID: string | null;
  setClearIntervalID: (clearIntervalID: string | null) => void;

  percentage: number;
  elapsedTime: number;

  focusSessions: { timestamp: string; duration: number }[];
  setFocusSessions: (
    sessions: { timestamp: string; duration: number }[]
  ) => void;
};

export type FocusSession = {
  timestamp: string;
  duration: number;
};
