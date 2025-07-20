import FocusText from "./component/FocusText";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeText from "./component/HomeText";
import { Routes, Route } from "react-router";
import { FocusProvider } from "./store/FocusContext/FocusProvider";
import { GoalProvider } from "./store/GoalContext/GoalProvider";
import "./styles.css";

function App() {
  return (
    <GoalProvider>
      <FocusProvider>
        <div className="background_img">
          <Header />
          <Routes>
            <Route path="/" element={<HomeText />} />
            <Route path="/focus" element={<FocusText />} />
          </Routes>
          <Footer />
        </div>
      </FocusProvider>
    </GoalProvider>
  );
}

export default App;
