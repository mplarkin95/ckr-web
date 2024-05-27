"use client";

import React, { useMemo, useState } from "react";

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const SubButton = () => {
  const [input, setInput] = useState("mplarkin95@gmail.com");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError("");
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateEmail(input)) {
      setError("Please use a valid email");
      return;
    }
    setIsProcessing(true);
    console.log(input);
    fetch(`/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${input}`,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setIsSubscribed(true);
          setIsProcessing(false);
        } else {
          setError("Something went wrong. Please try again.");
          setIsProcessing(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const buttonText = useMemo(() => {
    if (isProcessing) {
      return "Processing...";
    }
    if (isSubscribed) {
      return "Subscribed!";
    }
    return "Subscribe";
  }, [isProcessing, isSubscribed]);

  return (
    <div className="flex flex-col w-full ">
      {!isProcessing && !isSubscribed && (
        <input
          value={input}
          onChange={handleInput}
          placeholder="Subscribe to our newsletter"
          className="w-1/2 mx-auto mt-10 p-2 border-2 border-black rounded-md text-black"
          disabled={isProcessing}
        />
      )}
      {!!error && (
        <div role="alert" className="w-1/4 mx-auto">
          <div className="border border-red-400 rounded-b px-1 py-1 my-2 text-red-700">
            <p className="text-center">{error}</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-1/4 mx-auto mt-5 p-2 border-2 border-black rounded-md"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SubButton;
