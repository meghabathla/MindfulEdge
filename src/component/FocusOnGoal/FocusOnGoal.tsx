import React from "react";
import "./FocusOnGoal.css";
import { DropDown } from "../DropDown/DropDown";
import { useFocusContext } from "../../store/FocusContext/FocusContext";
import { useGoalContext } from "../../store/GoalContext/GoalContext";
import { GoalTask } from "../GoalTask/GoalTask";

const FocusOnGoal = () => {
  // const handleEdit = () => {
  //   const newGoal = prompt("What is your main goal for today?", goal);
  //   if (newGoal !== null) {
  //     setCurrentGoal(newGoal);
  //   }
  // };

  // const handleClear = () => {
  //   setCurrentGoal("");
  // };

  return <GoalTask />;

  // return (
  //   <div className="focus_on_goal">
  //     <div className="text_medium">
  //       {goal ? ` will focus on ${goIal}` : "I will focus on ..."}
  //     </div>
  //     <DropDown
  //       list={[
  //         {
  //           label: "Edit",
  //           onClick: handleEdit,
  //         },
  //         {
  //           label: "Clear",
  //           onClick: handleClear,
  //         },
  //       ]}
  //     />
  //   </div>
  // );
};

export default FocusOnGoal;
