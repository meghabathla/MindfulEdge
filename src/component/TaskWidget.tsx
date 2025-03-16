import { useEffect, useState } from "react";
import Routine from "./Routine/Routine";

export const TaskWidget = () => {
  const [isTaskVisible, setIsTaskVisible] = useState(false);

  useEffect(() => {
    try {
      const visbility = JSON.parse(localStorage.getItem("IsTaskVisible") || "");
      setIsTaskVisible(Boolean(visbility));
    } catch (error) {
      console.log("Error in getting task from local storage", error);
    }
  }, []);
  const toggleTask = () => {
    setIsTaskVisible((prevTaskVisible) => {
      const currentVisibilty = !prevTaskVisible;
      localStorage.setItem("IsTaskVisible", JSON.stringify(currentVisibilty));
      return currentVisibilty;
    });
  };
  return (
    <div>
      <button className="task_button" onClick={toggleTask}>
        Tasks
      </button>

      {isTaskVisible && <Routine />}
    </div>
  );
};
