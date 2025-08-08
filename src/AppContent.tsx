import { getDailyListItem } from "./util/common";
import { backgroundImages } from "./constants/backgroundImages";
import { useFocusContext } from "./store/FocusContext/FocusContext";
import FocusPage from "./pages/FocusPage";
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import Footer from "./component/Footer";

export const AppContent = () => {
  const { isOnFocusPage } = useFocusContext();
  return (
    <div
      className="background_img"
      style={{
        backgroundImage: `url(${getDailyListItem(backgroundImages).imageURL})`,
      }}
    >
      <Header />
      {isOnFocusPage ? <FocusPage /> : <HomePage />}
      <Footer />
    </div>
  );
};
