import { IoMdSettings } from "react-icons/io";
import { TaskWidget } from "./TaskWidget";
import { getDailyListItem } from "../util/common";
import { quotesList } from "../constants/quotes";

const Footer = () => {
  const openChatGPT = () => {
    if (typeof window.chrome !== "undefined" && window.chrome.tabs) {
      window.chrome.tabs.create({ url: "https://chat.openai.com/" });
    } else {
      window.open("https://chat.openai.com/", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="footer">
      <div className=" settings_section">
        <IoMdSettings style={{ color: "rgb(237, 237, 237)" }} size={20} />
        <div onClick={openChatGPT}>Ask AI</div>
      </div>
      <div>{getDailyListItem(quotesList).quotation}</div>
      <TaskWidget />
    </div>
  );
};

export default Footer;
