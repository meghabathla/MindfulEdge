import DigitalClock from "../component/DigitalClock";
import { GreetMessage } from "../component/GreetMessage/GreetMessage";
import { GoalTask } from "../component/GoalTask/GoalTask";
import { useGoalContext } from "../store/GoalContext/GoalContext";

const HomePage = () => {
  const { goal } = useGoalContext();
  return (
    <div className="page_container home_text">
      <DigitalClock />
      <GreetMessage />
      <div className="text_small">
        {goal ? "Today" : "What is your main goal for today?"}
      </div>
      <GoalTask />
    </div>
  );
};

export default HomePage;
