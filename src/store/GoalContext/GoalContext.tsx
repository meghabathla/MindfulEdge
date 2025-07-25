import { createContext, useContext } from "react";

type GoalContextType = {
  goal: string;
  isChecked: boolean;
  isEditing: boolean;
  updateIsChecked: (checked: boolean) => void;
  deleteGoal: () => void;
  updateGoal: (text: string) => void;
  startEditing: () => void;
  stopEditing: () => void;
};

export const GoalContext = createContext<GoalContextType>({
  goal: "",
  isChecked: false,
  isEditing: false,
  updateIsChecked: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
  startEditing: () => {},
  stopEditing: () => {},
});

export const useGoalContext = () => {
  return useContext(GoalContext);
};
