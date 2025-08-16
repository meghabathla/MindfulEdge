import { FaHeadSideVirus } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { Link } from "./Link/Link";
import FocusedToday from "./FocusedToday/FocusedToday";
import { WeatherWidget } from "./Weather/WeatherWidget";
import { useFocusContext } from "../store/FocusContext/FocusContext";

const Header = () => {
  const { isOnFocusPage, togglePageContent } = useFocusContext();

  const renderNavigationIcon = () => {
    const NavigationIcon = isOnFocusPage ? ImHome : FaHeadSideVirus;
    return (
      <div className="focus_section" onClick={togglePageContent}>
        <div className="icon_container">
          <NavigationIcon size={20} />
        </div>
        <div>{isOnFocusPage ? "Home" : "Focus"}</div>
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
        <div className="add_section">
          <div className="icon_container">
            <IoAddCircleOutline size={20} />
          </div>
          <div>Add</div>
        </div>
        <FocusedToday />
        <WeatherWidget />
      </div>
    </div>
  );
};

export default Header;
