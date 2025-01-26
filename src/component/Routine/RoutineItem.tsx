import React from "react";
import { HiEllipsisHorizontalCircle } from "react-icons/hi2";
import { RountineItem } from "./Rountine";

type RoutineItemsProps = {
  routine: RountineItem;
  handleChecked: (id: number) => void;
};
export const RoutineItem: React.FC<RoutineItemsProps> = ({
  routine,
  handleChecked,
}) => {
  return (
    <div className={`routine_item ${routine.mark ? "checked_routine" : ""}`}>
      <div className="routine_item_icon">
        <input type="checkbox" onClick={() => handleChecked(routine.id)} />
      </div>
      <div className="routine_task"> {routine.task}</div>
      <div className="routine_item_icon">
        <HiEllipsisHorizontalCircle style={{ color: "black" }} />
      </div>
    </div>
  );
};
