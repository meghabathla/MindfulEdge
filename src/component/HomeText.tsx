import DigitalClock from "./DigitalClock";
import { GreetMessage } from "./GreetMessage";
import { GoalTask } from "./GoalTask/GoalTask";

const HomeText = () => {
  return (
    <div className="page_container home_text">
      <DigitalClock />
      <GreetMessage />
      <div className="text_small">What is your main goal for today?</div>

      <GoalTask />
    </div>
  );
};

export default HomeText;
