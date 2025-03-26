import { motion } from "framer-motion";
import styles from "./ReactLogo.module.scss";
import { useRotation } from "../hooks/useRotation";
import reactLogo from "../assets/react.svg";

const ROTATION_MULTIPLIER = 1000;

interface ReactLogoProps {}

export function ReactLogo({}: ReactLogoProps) {
  const { isClockwise, toggleRotation } = useRotation();

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
