import DigitalClock from "../component/DigitalClock";
import { GreetMessage } from "../component/GreetMessage";
import { GoalTask } from "../component/GoalTask/GoalTask";

const HomePage = () => {
  return (
    <div className="page_container home_text">
      <DigitalClock />
      <GreetMessage />
      <div className="text_small">What is your main goal for today?</div>
      <GoalTask />
    </div>
  );
};

export default HomePage;
