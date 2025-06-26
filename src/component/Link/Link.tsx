/*global chrome*/
import React from "react";
import { TbExternalLink } from "react-icons/tb";

export const Link = () => {
  const handleGoogleTab = () => {
    // if (chrome?.tabs) {
    //   chrome.tabs.create({ url: "https://www.google.com" });
    // } else {
    //   window.open("https://www.google.com", "_blank", "noopener,noreferrer");
    // }
    window.open("https://www.google.com", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="link_section">
      <div className="icon_container">
        <TbExternalLink size={25} />
      </div>
      <div onClick={handleGoogleTab}>Links</div>
    </div>
  );
};
