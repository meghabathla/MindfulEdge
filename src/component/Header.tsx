import { FaHeadSideVirus } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "./Link/Link";
import FocusedToday from "./FocusedToday/FocusedToday";

// import { WeatherWidget } from "./WeatherWidget";
// import { FaRegMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header">
      <div className="left_header_content">
        <Link />

        <div className="focus_section">
          <div className="icon_container">
            <FaHeadSideVirus size={20} />
          </div>
          <div>Focus</div>
        </div>
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
