import React from "react";
import { IoMdSettings } from "react-icons/io";
import { TaskWidget } from "./TaskWidget";
import { quotesList } from "../util/quotes";

const Footer = () => {
  const openChatGPT = () => {
    window.open("https://chat.openai.com/", "_blank"); // new tab
    // window.location.href = "https://chat.openai.com/"; // load on same page
  };
  const generateRandomNum = () => {
    const randonNum = Math.floor(Math.random() * 10);
    return randonNum.toString();
  };
  const randomNumber = generateRandomNum();
  const matchedQuote = quotesList.find(
    (quote) => quote.quoteNum === randomNumber
  );

  return (
    <div className="footer">
      <div className=" settings_section">
        <IoMdSettings style={{ color: "rgb(162, 160, 160)" }} size={20} />
        <div onClick={openChatGPT}>Ask AI</div>
      </div>
      <div>
        {matchedQuote
          ? matchedQuote.quotation
          : "“Enjoy the little things, for one day you may look back and realize they were the big ones.”"}
      </div>
      <TaskWidget />
    </div>
  );
};

export default Footer;
