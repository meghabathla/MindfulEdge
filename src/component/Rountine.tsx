import { useState } from "react";
import "../styles.css";
const Rountine = () => {
  const [routine, setRoutine] = useState<string>("");

  const [routineList, setRoutineList] = useState<
    {
      id: number;
      task: string;
      mark: boolean;
    }[]
  >([]);

  const handleRoutine = (value: string): void => {
    const trimString = value.trim();
    if (trimString.length > 0) {
      setRoutine(value);
    }
  };

  const handleSubmit = (): void => {
    console.log(routine);

    if (routine.trim().length > 0) {
      const newRoutine = {
        id: Math.random() * 1000,
        task: routine,
        mark: false,
      };

      setRoutineList((prevArray) => [...prevArray, newRoutine]);
      setRoutine("");
    } else {
      window.alert("you can not submit empty routine");
    }
  };
  const handleRemove = (key: number): void => {
    setRoutineList(routineList.filter((routine) => routine.id !== key));
  };
  const handleChecked = (key: number): void => {
    setRoutineList(
      routineList.map((routine) =>
        routine.id === key ? { ...routine, mark: true } : routine
      )
    );
  };

  return (
    <div className="routine_container">
      <input
        className="routine_input"
        value={routine}
        onChange={(e) => handleRoutine(e.target.value)}
      />
      <button className="button_submit" onClick={handleSubmit}>
        submit
      </button>
      {routineList.map((routine) => (
        <div
          key={routine.id}
          className={`routine_list ${routine.mark ? "checked_routine" : ""}`}
        >
          <input type="checkbox" onClick={() => handleChecked(routine.id)} />
          {routine.task}
          <button
            className="button_delete"
            onClick={() => handleRemove(routine.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Rountine;
