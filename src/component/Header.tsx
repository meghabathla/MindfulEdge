import { FaHeadSideVirus } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "./Link/Link";
import FocusedToday from "./FocusedToday/FocusedToday";
import { useLocation, useNavigate } from "react-router-dom";
import { BsStopCircle } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderNavigationIcon = () => {
    const isFocusPage = location.pathname.includes("/focus");

    const handleOnNavigate = () => {
      navigate(isFocusPage ? "/" : "/focus");
    };

    const NavigationIcon = isFocusPage ? BsStopCircle : FaHeadSideVirus;

    return (
      <div className="focus_section" onClick={handleOnNavigate}>
        <div className="icon_container">
          <NavigationIcon size={20} />
        </div>
        <div>{isFocusPage ? "Exit Focus Mode" : "Focus"}</div>
      </div>
    );
  };
  return (
    <div className="header">
      <div className="left_header_content">
        <Link />
        {renderNavigationIcon()}
      </div>

      <div className="right_header_content">
        <div className="add_section ">
          <div className="icon_container">
            <IoAddCircleOutline size={20} />
          </div>
          <div>Add</div>
        </div>

        <FocusedToday />

        {/* <WeatherWidget /> */}
      </div>
    </div>
  );
};

export default Header;
