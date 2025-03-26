import { useState } from "react";

export const useRotation = (initialDirection = true) => {
  const [isClockwise, setIsClockwise] = useState(initialDirection);

  const toggleRotation = () => {
    setIsClockwise((prev) => !prev);
  };

  return {
    isClockwise,
    toggleRotation,
  };
};
