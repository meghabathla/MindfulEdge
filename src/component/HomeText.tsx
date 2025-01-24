import React from "react";
import DigitalClock from "./DigitalClock";
import { GreetMessage } from "./GreetMessage";

const HomeText = () => {
  return (
    <div className="home_text">
      <DigitalClock />
      <GreetMessage />
      <div className="text_small">What is your main goal for today?</div>
      <input className="input_goals"></input>
    </div>
  );
};

export default HomeText;
