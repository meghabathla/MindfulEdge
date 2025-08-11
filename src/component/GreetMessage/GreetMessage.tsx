import React, { useEffect, useState, KeyboardEvent, useRef } from "react";
import "./GreetMessage.css";
import { DropDown } from "../DropDown/DropDown";

export const GreetMessage = () => {
  const [salutation, setSalutation] = useState<string>("");
  const [userName, setUserName] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      setSalutation("Good Morning");
    } else if (hours >= 12 && hours < 18) {
      setSalutation("Good afternoon");
    } else {
      setSalutation("Good evening");
    }

    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUserName(storedName);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, []);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const userName = e.target.value;
    setUserName(userName);
  };
  const handleSaveUsername = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      stopEditingUsername();
    }
  };
  const stopEditingUsername = () => {
    const trimmed = userName.trim();
    if (trimmed.length > 0) {
      setUserName(trimmed);
      localStorage.setItem("username", trimmed);
      setIsEditing(false);
    }
  };
  return (
    <div className="greet_container">
      <div className="text">{salutation}, </div>
      <div className="text">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            placeholder="Your name"
            className="input_greet"
            value={userName}
            onChange={handleUsername}
            onKeyDown={handleSaveUsername}
            onBlur={stopEditingUsername}
            aria-label="Enter your name"
          />
        ) : (
          userName
        )}
      </div>
      <DropDown
        list={[
          {
            label: "Edit",
            onClick: () => setIsEditing(true),
          },
        ]}
      />
    </div>
  );
};
