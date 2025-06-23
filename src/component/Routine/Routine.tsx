import { ChangeEventHandler, KeyboardEvent, useEffect, useState } from "react";
import "./Routine.css";
import { RoutineItem } from "./RoutineItem";

export type RoutineItemList = {
  id: number;
  task: string;
  mark: boolean;
};

const updateRoutineListInLocalStorage = (updatedList: RoutineItemList[]) => {
  localStorage.setItem("routine", JSON.stringify(updatedList));
};
const Routine = () => {
  const [routine, setRoutine] = useState("");
  const [routineList, setRoutineList] = useState<RoutineItemList[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

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

  const handleRoutine = (value: string) => {
    if (value.trim().length > 0) {
      setRoutine(value);
    } else {
      setRoutine("");
    }
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (routine.trim().length > 0) {
        const newRoutine = {
          id: Math.random() * 1000,
          task: routine,
          mark: false,
        };
        setRoutineList((prevArray) => {
          const updatedList = [...prevArray, newRoutine]; //
          updateRoutineListInLocalStorage(updatedList);
          return updatedList;
        });

        setRoutine("");
        console.log("routine", routine);
      } else {
        window.alert("you can not submit empty routine");
      }
    }
  };

  const handleChecked = (key: number) => {
    setRoutineList((prevRoutineList) => {
      const updatedList = prevRoutineList.map((routine) =>
        routine.id === key ? { ...routine, mark: !routine.mark } : routine
      );
      updateRoutineListInLocalStorage(updatedList);
      return updatedList;
    });
  };

  const onEditRoutine: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newRoutine = event.target.value;
    setRoutineList((prevRoutineList) => {
      const updatedList = prevRoutineList.map((routine) =>
        routine.id === editingId ? { ...routine, task: newRoutine } : routine
      );
      updateRoutineListInLocalStorage(updatedList);
      console.log("find routine id", editingId);
      return updatedList;
    });
  };

  const handleRemove = (key: number) => {
    setRoutineList((prevRoutineList) => {
      const updatedList = prevRoutineList.filter(
        (routine) => routine.id !== key
      );
      updateRoutineListInLocalStorage(updatedList);
      return updatedList;
    });
  };

  return (
    <div className="routine_container">
      <div className="routine_heading">Today</div>
      <div className="routine_list">
        {routineList.map((routine) => (
          <RoutineItem
            key={routine.id}
            routine={routine}
            isChecked={routine.mark === true}
            onCheckboxChange={handleChecked}
            onDelete={handleRemove}
            onEditRoutine={onEditRoutine}
            isEditing={editingId === routine.id}
            onEdit={(id) => setEditingId(id)}
          />
        ))}
      </div>

      <input
        className="routine_input"
        value={routine}
        placeholder="New Task"
        onKeyDown={handleSubmit}
        onChange={(e) => handleRoutine(e.target.value)}
      />
    </div>
  );
};

export default Routine;
