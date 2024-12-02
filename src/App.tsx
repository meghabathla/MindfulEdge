// import Routine from "./component/Rountine.js";
import DigitalClock from "./component/DigitalClock";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeText from "./component/HomeText";
import "./styles.css";

function App() {
  return (
    <div className="background_img">
      <Header/>
      <DigitalClock/>
      <HomeText/>
      <Footer/>
    </div>
  );
}

export default App;
