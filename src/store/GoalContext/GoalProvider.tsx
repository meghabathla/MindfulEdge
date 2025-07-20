import React, { useEffect, useState } from "react";
import { GoalContext } from "./GoalContext";

export const GoalProvider = ({ children }: { children: React.ReactNode }) => {
  const [goal, setGoal] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    try {
      const getGoal = localStorage.getItem("goal"); // make util to set , get, remove from local storage
      const getIsChecked = localStorage.getItem("isChecked");

      if (getGoal) {
        setGoal(getGoal);
        setIsEditing(false);
      }
      if (typeof getIsChecked === "string") {
        const checked = JSON.parse(getIsChecked) === true;
        setIsChecked(checked);
      }
    } catch (error) {
      console.log(
        "Error in getting goal or checkedbox value from local storage",
        error
      );
    }
  }, []);

  const updateIsChecked = (checked: boolean) => {
    if (goal.trim().length > 0) {
      setIsChecked(checked);
      localStorage.setItem("isChecked", JSON.stringify(checked));
    }
  };

  const deleteGoal = (): void => {
    setGoal("");
    updateIsChecked(false);

    setIsEditing(true);
    localStorage.removeItem("goal");
  };

  const updateGoal = (text: string) => {
    setGoal(text);
    localStorage.setItem("goal", text);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <GoalContext.Provider
      value={{
        goal,
        isChecked,
        isEditing,
        updateIsChecked,
        deleteGoal,
        updateGoal,
        startEditing,
        stopEditing,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};
