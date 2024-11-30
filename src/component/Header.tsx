import "../styles.css";
import { TbExternalLink } from "react-icons/tb";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { WiDegrees } from "react-icons/wi";
import { IoAddCircleOutline } from "react-icons/io5";
// import { FaRegMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header">
      <div className="left_header_content">

        <div className="link_section">
        <div ><TbExternalLink size={25}/></div>
        <div>Links</div>
        </div>

        <div className="focus_section">
        <div><FaHeadSideVirus size={25} /></div>
        <div>Focus</div>
        </div>

      </div>

      <div className="right_header_content">

        <div className="add_section ">
        <div><IoAddCircleOutline  size={20} /></div>
      <div>Add</div>
      </div>

      <div className="focus_today_section">
        <div className="focus_time">
        <div><FaRegCircle  size={20} style={{paddingRight: "5px"}} /></div>
          <div style={{fontSize: "20px"}}>20</div>
          <div style={{ fontSize: "20px"}}>m</div>
        </div>
        <div>Focused Today</div>
      </div>

      <div className="weather_section">
        <div className="weather_degree_day">
        <TiWeatherSunny  size={18} style={{paddingRight: "5px"}} />
       <div style={{fontSize: "20px"}}>22</div>
       <WiDegrees style={ {color:"white"}} size={30} />
        </div>
      <div>Dehradun</div>
      </div>
      </div>

    </div>
  );
};

export default Header;
