import React, { useEffect, useState } from "react";

export const GreetMessage = () => {
  const [salutation, setSalutation] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours > 5) {
      setSalutation("Good Morning");
    }

    if (hours > 12) {
      setSalutation("Good afternoon");
    }
    if (hours > 18 || hours < 5) {
      setSalutation("Good evening");
    }
  }, []);
  return <div className="text_medium">{salutation}, Megha.</div>;
};
