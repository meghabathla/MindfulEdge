import { SlOptions } from "react-icons/sl";
import "./DropDown.css";
import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type ListItem = {
  label: string;
  onClick: () => void;
};
type DropDownProps = {
  list: ListItem[];
};

export const DropDown = ({ list }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  return (
    <div className="dropdown_container">
      <SlOptions
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
      />

      {isOpen ? (
        <div className="dropDown_options" ref={ref}>
          <div>
            {list.map(({ label, onClick }) => {
              return (
                <div className="dropDown_list" onClick={onClick} key={label}>
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
