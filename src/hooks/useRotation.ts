import { useState } from "react";

export const useRotation = (enabled = true, initialDirection = true) => {
  const [isClockwise, setIsClockwise] = useState(initialDirection);

  const toggleRotation = () => {
    if (enabled) {
      setIsClockwise((prev) => !prev);
    }
  };

  return {
    isClockwise: enabled ? isClockwise : false,
    toggleRotation,
  };
};
