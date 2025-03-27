import { useTransform, useMotionValue } from "framer-motion";
import { useMousePosition } from "./useMousePosition";
import { useState } from "react";

export const useDistanceScale = (
  enabled = true,
  minScale = 0.5,
  maxScale = 1.5
) => {
  const mousePosition = useMousePosition();
  const [hasMouseMoved, setHasMouseMoved] = useState(false);

  const x = useMotionValue(mousePosition.x);
  const y = useMotionValue(mousePosition.y);

  x.set(mousePosition.x);
  y.set(mousePosition.y);

  // Set hasMouseMoved to true when mouse position changes from initial values
  if (mousePosition.x !== 0 || mousePosition.y !== 0) {
    !hasMouseMoved && setHasMouseMoved(true);
  }

  const scale = useTransform([x, y], (latest: number[]) => {
    if (!enabled || !hasMouseMoved) {
      return 1.0; // Return normal scale when disabled or until mouse moves
    }

    const distanceFromCenter = Math.sqrt(
      Math.pow(latest[0] - window.innerWidth / 2, 2) +
        Math.pow(latest[1] - window.innerHeight / 2, 2)
    );

    const maxDistance = Math.sqrt(
      Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2)
    );

    const normalizedDistance = 1 - distanceFromCenter / maxDistance;
    return minScale + normalizedDistance * (maxScale - minScale);
  });

  return scale;
};
