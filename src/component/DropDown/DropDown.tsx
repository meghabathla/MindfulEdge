import { SlOptions } from "react-icons/sl";
import "./DropDown.css";
import { useState, type CSSProperties } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type ListItem = {
  label: string;
  onClick: () => void;
};
type DropDownProps = {
  list: ListItem[];
  containerStyle?: CSSProperties;
  menuStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  iconStyle?: CSSProperties;
};

export const DropDown = ({
  list,
  containerStyle,
  menuStyle,
  itemStyle,
  iconStyle,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  return (
    <div className="dropdown_container" style={containerStyle}>
      <SlOptions
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
        style={iconStyle}
      />

      {isOpen ? (
        <div className="dropDown_options" ref={ref} style={menuStyle}>
          <div>
            {list.map(({ label, onClick }) => {
              return (
                <div
                  className="dropDown_list"
                  onClick={onClick}
                  key={label}
                  style={itemStyle}
                >
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
