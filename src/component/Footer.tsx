import { IoMdSettings } from "react-icons/io";
import { TaskWidget } from "./TaskWidget";
import { useEffect, useState } from "react";
import { getQuote } from "../util/quoteUtils";

const Footer = () => {
  const [quote, setQuote] = useState("");
  const openChatGPT = () => {
    if (typeof window.chrome !== "undefined" && window.chrome.tabs) {
      window.chrome.tabs.create({ url: "https://chat.openai.com/" });
    } else {
      window.open("https://chat.openai.com/", "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    const value = getQuote();
    setQuote(value);
  }, []);

  return (
    <div className="footer">
      <div className=" settings_section">
        <IoMdSettings style={{ color: "rgb(162, 160, 160)" }} size={20} />
        <div onClick={openChatGPT}>Ask AI</div>
      </div>
      <div>{quote}</div>
      <TaskWidget />
    </div>
  );
};

export default Footer;
