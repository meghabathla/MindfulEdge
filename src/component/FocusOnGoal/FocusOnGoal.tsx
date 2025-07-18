import React from "react";
import "./FocusOnGoal.css";
import { DropDown } from "../DropDown/DropDown";
import { useFocusContext } from "../../store/FocusContext";

const FocusOnGoal = () => {
  const { currentGoal, setCurrentGoal } = useFocusContext();

  const handleEdit = () => {
    const newGoal = prompt("What is your main goal for today?", currentGoal);
    if (newGoal !== null) {
      setCurrentGoal(newGoal);
    }
  };

  const handleClear = () => {
    setCurrentGoal("");
  };

  return (
    <div className="focus_on_goal">
      <div className="text_medium">
        {currentGoal ? `I will focus on ${currentGoal}` : "I will focus on ..."}
      </div>
      <DropDown
        list={[
          {
            label: "Edit",
            onClick: handleEdit,
          },
          {
            label: "Clear",
            onClick: handleClear,
          },
        ]}
      />
    </div>
  );
};

export default FocusOnGoal;
