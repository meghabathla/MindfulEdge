import React, { ChangeEventHandler } from "react";
import { DropDown } from "../DropDown/DropDown";
import { RoutineItemList } from "./Routine";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type RoutineItemsProps = {
  onCheckboxChange: (key: number) => void;
  isChecked: boolean;
  routine: RoutineItemList;
  onDelete: (key: number) => void;
  onEditRoutine: ChangeEventHandler<HTMLInputElement>;
  isEditing: boolean;
  onEdit: (routineId: number | null) => void;
};
export const RoutineItem: React.FC<RoutineItemsProps> = ({
  onCheckboxChange,
  isChecked,
  routine,
  onDelete,
  onEditRoutine,
  isEditing,
  onEdit,
}) => {
  // onkeydown, onchange se check , click outside the input box then save

  const { ref } = useOutsideClick<HTMLInputElement>(() => {
    onEdit(null);
  });
  return (
    <div className={`routine_item ${isChecked ? "checked_routine" : ""}`}>
      <div className="routine_item_icon">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckboxChange(routine.id)}
        />
      </div>
      {isEditing ? (
        <input
          value={routine.task}
          onChange={onEditRoutine}
          ref={ref}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEdit(null);
            }
          }}
        />
      ) : (
        <div className="routine_task"> {routine.task}</div>
      )}

      <DropDown
        list={[
          {
            label: "Edit",
            onClick: () => {
              onEdit(routine.id);
            },
          },
          {
            label: "Delete",
            onClick: () => onDelete(routine.id),
          },
        ]}
      />
    </div>
  );
};
