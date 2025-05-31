import React, { ChangeEventHandler } from "react";
import { SlOptions } from "react-icons/sl";
import "./GoalTask.css";

type GoalProps = {
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
  text: string;
};
export const GoalTask: React.FC<GoalProps> = ({
  isChecked,
  onCheckboxChange,
  text,
}) => {
  return (
    <div className={`goal_task_container `}>
      <input
        className="goal_checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={onCheckboxChange}
      />

      <div className={`goal_text ${isChecked ? "checked_goal_task" : ""}`}>
        {text}
      </div>
      <div className="goal_options_btn">
        {" "}
        <SlOptions />
      </div>
    </div>
  );
};
