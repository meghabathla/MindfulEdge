import { FaHeadSideVirus } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { Link } from "./Link/Link";
import FocusedToday from "./FocusedToday/FocusedToday";
import { useLocation, useNavigate } from "react-router-dom";
import { getBackgroundImage } from "../constants/backgroundImages";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderNavigationIcon = () => {
    const isFocusPage = location.pathname.includes("/focus");

    const handleOnNavigate = () => {
      navigate(isFocusPage ? "/" : "/focus");
    };

    const NavigationIcon = isFocusPage ? ImHome : FaHeadSideVirus;

    return (
      <div className="focus_section" onClick={handleOnNavigate}>
        <div className="icon_container">
          <NavigationIcon size={20} />
        </div>
        <div>{isFocusPage ? "Home" : "Focus"}</div>
      </div>
    );
  };
  getBackgroundImage();
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
