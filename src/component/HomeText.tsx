import { ChangeEventHandler, useEffect, useState } from "react";
import DigitalClock from "./DigitalClock";
import { GreetMessage } from "./GreetMessage";
import { GoalTask } from "./GoalTask/GoalTask";

const HomeText = () => {
  const [goal, setGoal] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    try {
      const getGoal = localStorage.getItem("goal"); // make util to set , get, remove from local storage
      const getIsChecked = localStorage.getItem("isChecked");
      console.log({ getIsChecked });

      console.log(getGoal, "getGoal");
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

  const onCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked;
    if (goal.trim().length > 0) {
      setIsChecked(checked);
      localStorage.setItem("isChecked", JSON.stringify(checked));
    }
  };

  const handleDeleteGoal = (): void => {
    setGoal("");
    setIsEditing(true);
    localStorage.removeItem("goal");
  };
  const handleEditGoal = () => {
    setIsEditing(true);
  };
  const updateGoal = (text: string) => {
    setGoal(text);
    localStorage.setItem("goal", text);
  };

  return (
    <div className="home_text">
      <DigitalClock />
      <GreetMessage />
      <div className="text_small">What is your main goal for today?</div>

      <GoalTask
        goal={goal}
        setGoal={updateGoal}
        onCheckboxChange={onCheckboxChange}
        isChecked={isChecked}
        onDelete={handleDeleteGoal}
        onEdit={handleEditGoal}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </div>
  );
};

export default HomeText;
