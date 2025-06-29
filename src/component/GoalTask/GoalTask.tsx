import React, {
  ChangeEventHandler,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import "./GoalTask.css";
import { DropDown } from "../DropDown/DropDown";

type GoalProps = {
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
  text: string;
  onDelete: () => void;
  onEdit: () => void;
  isEditing: boolean;
  setGoal: React.Dispatch<React.SetStateAction<string>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};
export const GoalTask: React.FC<GoalProps> = ({
  isChecked,
  onCheckboxChange,
  text,
  setGoal,
  onDelete,
  onEdit,
  isEditing,
  setIsEditing,
}) => {
  // const goalInputRef = useRef<HTMLInputElement>(null);
  const [localGoal, setLocalGoal] = useState(text);

  useEffect(() => {
    if (isEditing) {
      setLocalGoal(text); // sync with prop when editing starts
    }
  }, [isEditing, text]);

  const handleGoalChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setGoal(e.target.value);
  };
  const handleGoal = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setGoal(localGoal);
      localStorage.setItem("goal", JSON.stringify(localGoal));
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

      {(isEditing && text) || text === "" ? (
        <input
          value={text}
          onKeyDown={handleGoal}
          className="input_goals"
          onChange={handleGoalChange}
        />
      ) : (
        <div className={`goal_text ${isChecked ? "checked_goal_task" : ""}`}>
          {text}
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
              label: "Delete",
              onClick: onDelete,
            },
          ]}
        />
      </div>
    </div>
  );
};
