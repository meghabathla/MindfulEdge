import React, { ChangeEventHandler, KeyboardEvent } from "react";
import "./GoalTask.css";
import { DropDown } from "../DropDown/DropDown";

type GoalProps = {
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
  goal: string;
  onDelete: () => void;
  onEdit: () => void;
  isEditing: boolean;
  setGoal: (text: string) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};
export const GoalTask: React.FC<GoalProps> = ({
  isChecked,
  onCheckboxChange,
  goal,
  setGoal,
  onDelete,
  onEdit,
  isEditing,
  setIsEditing,
}) => {
  // const goalInputRef = useRef<HTMLInputElement>(null);

  const handleGoalChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    setGoal(inputValue);
  };
  const handleSaveGoal = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
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
              onClick: onEdit,
            },
            {
              label: "Clear",
              onClick: onDelete,
            },
          ]}
        />
      </div>
    </div>
  );
};
