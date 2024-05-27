"use client";

import { useState } from "react";

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const useSubscribe = () => {
  const [input, setInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (isProcessing) {
      return;
    }
    if (!validateEmail(input)) {
      setError("Please use a valid email");
      return;
    }
    setIsProcessing(true);
    setError("");
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
          if (res.status === 409) {
            setIsProcessing(false);
            setIsSubscribed(true);
          } else {
            setError("Something went wrong. Please try again.");
            setIsProcessing(false);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    input,
    isSubscribed,
    isProcessing,
    error,
    handleInput,
    handleSubmit,
  };
};
