import { motion } from "framer-motion";
import styles from "./ReactLogo.module.scss";
import { useRotation } from "../hooks/useRotation";
import reactLogo from "../assets/react.svg";
import { useDistanceScale } from "../hooks/useDistanceScale";

const ROTATION_MULTIPLIER = 1000;

interface ReactLogoProps {}

export function ReactLogo({}: ReactLogoProps) {
  const { isClockwise, toggleRotation } = useRotation();
  const scale = useDistanceScale();

  return (
    <div className={styles.container}>
      <motion.img
        src={reactLogo}
        className={styles.logo}
        alt="React logo"
        animate={{
          rotate: isClockwise
            ? 360 * ROTATION_MULTIPLIER
            : -360 * ROTATION_MULTIPLIER,
        }}
        style={{
          cursor: "pointer",
          scale,
        }}
        transition={{
          rotate: {
            duration: 2 * ROTATION_MULTIPLIER,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        onClick={toggleRotation}
      />
    </div>
  );
}
