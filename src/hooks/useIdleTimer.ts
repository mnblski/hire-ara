import { useState, useEffect } from "react";

export const useIdleTimer = (enabled = true, delay = 100) => {
  const [idleTime, setIdleTime] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let isInPage = true;

    const startTimer = () => {
      intervalId = setInterval(() => {
        if (document.visibilityState === "visible" && isInPage) {
          setIdleTime((prev) => prev + 1);
        }
      }, 1000);
    };

    const pauseTimer = () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };

    // Handle enabled state changes
    setIdleTime(0);

    if (enabled) {
      startTimer();
    } else {
      pauseTimer();
      return;
    }

    const resetTimer = () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);

      timeoutId = setTimeout(() => {
        startTimer();
      }, delay);
    };

    const handleEnterPage = () => {
      isInPage = true;
      resetTimer();
    };

    const handleLeavePage = () => {
      isInPage = false;
      pauseTimer();
    };

    // Add event listeners
    document.body.addEventListener("mouseenter", handleEnterPage);
    document.body.addEventListener("mouseleave", handleLeavePage);
    window.addEventListener("mousemove", resetTimer);

    return () => {
      document.body.removeEventListener("mouseenter", handleEnterPage);
      document.body.removeEventListener("mouseleave", handleLeavePage);
      window.removeEventListener("mousemove", resetTimer);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [delay, enabled]);

  return idleTime;
};
