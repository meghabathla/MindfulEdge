import { KeyboardEvent, useEffect, useRef, useState } from "react";
import DigitalClock from "./DigitalClock";
import { GreetMessage } from "./GreetMessage";
import { GoalTask } from "./GoalTask/GoalTask";

const HomeText = () => {
  const [goal, setGoal] = useState<string>("");
  // const [inputValue, setInputValue] = useState("");
  const goalInputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    try {
      if (goal) {
        localStorage.setItem("goal", JSON.stringify(goal));
      }
      if (isChecked) {
        localStorage.setItem("isChecked", JSON.stringify(isChecked));
      }
    } catch (error) {
      console.log(
        "Error in setting goal or checkedbox value from local storage",
        error
      );
    }
  }, [goal, isChecked]);

  useEffect(() => {
    try {
      const getGoal = JSON.parse(localStorage.getItem("goal") || "");
      const getIsChecked = localStorage.getItem("isChecked");

      if (getGoal) {
        setGoal(getGoal);
      }
      if (getIsChecked) {
        setIsChecked(JSON.parse(getIsChecked));
      }
    } catch (error) {
      console.log(
        "Error in getting goal or checkedbox value from local storage",
        error
      );
    }
  }, []);

  const handleGoal = (e: KeyboardEvent<HTMLInputElement>): void => {
    const inputValue = goalInputRef.current?.value;
    if (e.key === "Enter" && inputValue) {
      setGoal(inputValue);
      // setGoal(inputValue);
      // setInputValue("");
    }
  };

  return (
    <div className="home_text">
      <DigitalClock />
      <GreetMessage />
      <div className="text_small">What is your main goal for today?</div>
      {goal ? (
        <GoalTask
          text={goal}
          onCheckboxChange={() => {
            setIsChecked((prevChecked) => !prevChecked);
          }}
          isChecked={isChecked}
        />
      ) : (
        <input
          ref={goalInputRef}
          // value={inputValue}
          onKeyDown={handleGoal}
          className="input_goals"
          // onChange={(e) => setInputValue(e.target.value)}
        ></input>
      )}
    </div>
  );
};

export default HomeText;
