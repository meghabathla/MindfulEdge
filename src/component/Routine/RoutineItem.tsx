import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { DropDown } from "../DropDown/DropDown";
// import { RoutineItemList } from "./Routine";
type RoutineItemsProps = {
  onCheckboxChange: () => void;
  isChecked: boolean;
  text: string;
};
export const RoutineItem: React.FC<RoutineItemsProps> = ({
  onCheckboxChange,
  isChecked,
  text,
}) => {
  const [isopen, setIsOpen] = useState(false);
  const handleEditOptios = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className={`routine_item ${isChecked ? "checked_routine" : ""}`}>
      <div className="routine_item_icon">
        <input
          type="checkbox"
          // defaultChecked={isChecked}
          checked={isChecked}
          onChange={onCheckboxChange}
        />
      </div>
      <div className="routine_task"> {text}</div>
      <div className="task_ellipis_button" onClick={handleEditOptios}>
        <SlOptions />
        {isopen && <DropDown />}
      </div>
    </div>
  );
};
