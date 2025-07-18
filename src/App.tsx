import FocusText from "./component/FocusText";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeText from "./component/HomeText";
import { FocusProvider } from "./store/FocusContext/FocusProvider";
import "./styles.css";

function App() {
  return (
    <FocusProvider>
      <div className="background_img">
        {/* <Header />
        <HomeText />
        <Footer /> */}
        <FocusText />
      </div>
    </FocusProvider>
  );
}

export default App;
