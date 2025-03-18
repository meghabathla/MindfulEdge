import { KeyboardEvent, useEffect, useState } from "react";
import "./Routine.css";
import { RoutineItem } from "./RoutineItem";
// import { DropDown } from "../DropDown/DropDown";

export type RoutineItemList = {
  id: number;
  task: string;
  mark: boolean;
};
const Routine = () => {
  const [routine, setRoutine] = useState<string>("");
  const [routineList, setRoutineList] = useState<RoutineItemList[]>();

  useEffect(() => {
    if (routineList !== undefined) {
      localStorage.setItem("routine", JSON.stringify(routineList));
    }
  }, [routineList]);

  useEffect(() => {
    try {
      const items = JSON.parse(localStorage.getItem("routine") || "[]");

      if (Array.isArray(items)) {
        setRoutineList(items);
      }
    } catch (error) {
      console.error("Error fetching routine data from localStorage:", error);
    }
  }, []);

  const handleRoutine = (value: string): void => {
    const trimString = value.trim();
    if (trimString.length > 0) {
      setRoutine(value);
    }
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      if (routine.trim().length > 0) {
        const newRoutine = {
          id: Math.random() * 1000,
          task: routine,
          mark: false,
        };
        setRoutineList((prevArray) => {
          const updatedList = [...(prevArray ?? []), newRoutine];
          // localStorage.setItem("routine", JSON.stringify(updatedList));
          return updatedList;
        });

        console.log("setting rotuine");
        setRoutine("");
        console.log("routine", routine);
      } else {
        window.alert("you can not submit empty routine");
      }
    }
  };

  const handleRemove = (key: number): void => {
    setRoutineList((prevRoutineList) =>
      (prevRoutineList ?? []).filter((routine) => routine.id !== key)
    );
  };
  const handleChecked = (key: number): void => {
    setRoutineList((prevRoutineList) =>
      (prevRoutineList ?? []).map((routine) =>
        routine.id === key ? { ...routine, mark: !routine.mark } : routine
      )
    );
  };

  return (
    <div className="routine_container">
      <div className="routine_heading">Today</div>
      <div className="routine_list">
        {routineList?.map((routine) => (
          <RoutineItem
            key={routine.id}
            isChecked={routine.mark === true}
            onCheckboxChange={() => handleChecked(routine.id)}
            text={routine.task}
          />
        )) ?? []}
      </div>

      <input
        className="routine_input"
        value={routine}
        placeholder="New Task"
        onKeyDown={handleSubmit}
        onChange={(e) => handleRoutine(e.target.value)}
      />
      {/* <DropDown /> */}
    </div>
  );
};

export default Routine;
