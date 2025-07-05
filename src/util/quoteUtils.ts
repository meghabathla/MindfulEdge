import { quotesList } from "../constants/quotes";

const generateNewQuote = () => {
  const currentDate = new Date();
  const expiryDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

  const randomNum = Math.floor(Math.random() * 10).toString();
  const quoteObject = quotesList.find((quote) => quote.quoteNum === randomNum);
  const currentQuotation = quoteObject?.quotation ?? quotesList[0].quotation;

  const quoteData = {
    expiryTime: expiryDate.toISOString(),
    quotation: currentQuotation,
  };

  localStorage.setItem("quoteData", JSON.stringify(quoteData));
  return currentQuotation;
};

export const getQuote = () => {
  const currentDate = new Date();
  const quoteData = localStorage.getItem("quoteData");
  let quote = "";
  if (!quoteData) {
    quote = generateNewQuote();
  } else {
    const quoteObj = JSON.parse(quoteData);
    const expiryDate = new Date(quoteObj.expiryTime);
    if (currentDate.getTime() > expiryDate.getTime()) {
      quote = generateNewQuote();
    } else {
      quote = quoteObj.quotation;
    }
  }
  return quote;
};
