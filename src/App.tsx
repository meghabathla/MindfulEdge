import { AppContent } from "./AppContent";
import { FocusProvider } from "./store/FocusContext/FocusProvider";
import { GoalProvider } from "./store/GoalContext/GoalProvider";
import "./styles.css";

function App() {
  return (
    <GoalProvider>
      <FocusProvider>
        <AppContent />
      </FocusProvider>
    </GoalProvider>
  );
}

export default App;
