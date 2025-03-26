import { useState, useEffect } from "react";

export const useIdleTimer = (delay = 100) => {
  const [idleTime, setIdleTime] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let isInPage = false;

    const startTimer = () => {
      intervalId = setInterval(() => {
        if (document.visibilityState === "visible" && isInPage) {
          setIdleTime((prev) => prev + 1);
        }
      }, 1000);
    };

    const resetTimer = () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      setIdleTime(0);

      timeoutId = setTimeout(() => {
        startTimer();
      }, delay);
    };

    const pauseTimer = () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };

    const handleEnterPage = () => {
      isInPage = true;
      resetTimer();
    };

    const handleLeavePage = () => {
      isInPage = false;
      pauseTimer();
    };

    // Start timer only when mouse enters the page
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
  }, [delay]);

  return idleTime;
};
