import React, { ChangeEventHandler, KeyboardEvent } from "react";
import "./GoalTask.css";
import { DropDown } from "../DropDown/DropDown";
import { useGoalContext } from "../../store/GoalContext/GoalContext";

export const GoalTask: React.FC = () => {
  const {
    updateIsChecked,
    goal,
    isChecked,
    isEditing,
    updateGoal,
    deleteGoal,
    startEditing,
    stopEditing,
  } = useGoalContext();

  const onCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked;
    updateIsChecked(checked);
  };

  const handleGoalChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    updateGoal(inputValue);
  };
  const handleSaveGoal = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      stopEditing();
    }
  };

  return (
    <div className={`goal_task_container`}>
      <input
        className="goal_checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={onCheckboxChange}
      />

      {isEditing ? (
        <input
          value={goal}
          onKeyDown={handleSaveGoal}
          className="input_goals"
          onChange={handleGoalChange}
        />
      ) : (
        <div className={`goal_text ${isChecked ? "checked_goal_task" : ""}`}>
          {goal}
        </div>
      )}

      <div className="goal_options_btn">
        {" "}
        <DropDown
          list={[
            {
              label: "Edit",
              onClick: startEditing,
            },
            {
              label: "Clear",
              onClick: deleteGoal,
            },
          ]}
        />
      </div>
    </div>
  );
};
