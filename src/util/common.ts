// Get background image based on current date (changes every 24 hours)
export const getDailyListItem = <T>(list: T[]): T => {
  const today = new Date();
  const dayOfMonth = today.getDate(); // 3
  const imageIndex = (dayOfMonth - 1) % list.length; // 3-1 % 17 = 2
  return list[imageIndex];
};

// Day of Month	Calculation	Image Index	Image Used
// 1	(1-1) % 17 = 0	0	Wallpaper  ,24,26
