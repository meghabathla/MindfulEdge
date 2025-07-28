type FocusTodayType = {
  focusTime: number;
  date: Date; // stored in ISO format
};

export const isSameDate = (date: Date): boolean => {
  const currentDate = new Date();
  const isDateSame = currentDate.getDate() === date.getDate();
  const isMonthSame = currentDate.getMonth() === date.getMonth();
  const isYearSame = currentDate.getFullYear() === date.getFullYear();

  if (isDateSame && isMonthSame && isYearSame) {
    return true;
  }
  return false;
};

export const getFocusTodayFromLocalStorage = (): FocusTodayType => {
  const focusData = localStorage.getItem("focusToday");

  if (focusData) {
    const focusTodayObj = JSON.parse(focusData);
    const focusDate = new Date(focusTodayObj.date);
    const focusTime = Number(focusTodayObj.focusTime);

    if (focusTodayObj && !isNaN(focusTime) && isSameDate(focusDate)) {
      return {
        focusTime: focusTime,
        date: focusDate,
      };
    }
  }

  return {
    focusTime: 0,
    date: new Date(),
  };
};

export const setFocusTodayInLocalStorage = (totalFocusValue: number) => {
  const { date: focusDate } = getFocusTodayFromLocalStorage();

  if (isSameDate(focusDate)) {
    localStorage.setItem(
      "focusToday",
      JSON.stringify({ focusTime: totalFocusValue, date: focusDate })
    );
  } else {
    localStorage.setItem(
      "focusToday",
      JSON.stringify({ focusTime: 0, date: new Date() })
    );
  }
};
