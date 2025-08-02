import { backgroundImages } from "../constants/backgroundImages";

// Get background image based on current date (changes every 24 hours)
export const getDailyBackgroundImage = () => {
  const today = new Date();
  const dayOfMonth = today.getDate(); // 1-31
  const imageIndex = (dayOfMonth - 1) % backgroundImages.length;
  return backgroundImages[imageIndex].imageURL;
};

// Random background image (original function)
// export const getBackgroundImage = () => {
//   const randomIndex = Math.floor(Math.random() * backgroundImages.length);
//   return backgroundImages[randomIndex].imageURL;
// };
