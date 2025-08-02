import Footer from "./component/Footer";
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import { FocusProvider } from "./store/FocusContext/FocusProvider";
import { GoalProvider } from "./store/GoalContext/GoalProvider";
import "./styles.css";
import FocusPage from "./pages/FocusPage";
import { getDailyBackgroundImage } from "./util/backgroundImageUtils";

function App() {
  return (
    <GoalProvider>
      <FocusProvider>
        <div
          className="background_img"
          style={{
            backgroundImage: `url(${getDailyBackgroundImage()})`,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/focus" element={<FocusPage />} />
          </Routes>
          <Footer />
        </div>
      </FocusProvider>
    </GoalProvider>
  );
}

export default App;
