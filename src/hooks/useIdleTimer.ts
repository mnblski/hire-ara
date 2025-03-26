import { useState, useEffect } from "react";

export const useIdleTimer = (delay = 100) => {
  const [idleTime, setIdleTime] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startTimer = () => {
      intervalId = setInterval(() => {
        setIdleTime((prev) => prev + 1);
      }, 1000);
    };

    const resetTimer = () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);

      timeoutId = setTimeout(() => {
        startTimer();
      }, delay);
    };

    const pauseTimer = () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };

    // Start timer immediately on mount
    startTimer();

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("mouseleave", pauseTimer);

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("mouseleave", pauseTimer);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [delay]);

  return idleTime;
};
