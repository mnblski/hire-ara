import { motion } from "framer-motion";
import styles from "./ReactLogo.module.scss";
import { useRotation } from "../../hooks/useRotation";
import reactLogo from "../../assets/react.svg";
import { useDistanceScale } from "../../hooks/useDistanceScale";
import { useSettings } from "../../context/SettingsContext";

const ROTATION_MULTIPLIER = 1000;

interface ReactLogoProps {}

export function ReactLogo({}: ReactLogoProps) {
  const {
    settings: { showRotation, showScale },
  } = useSettings();

  const { isClockwise, toggleRotation } = useRotation(showRotation);
  const scale = useDistanceScale(showScale);

  return (
    <div className={styles.container}>
      <motion.img
        src={reactLogo}
        className={styles.logo}
        alt="React logo"
        animate={{
          rotate: showRotation
            ? isClockwise
              ? 360 * ROTATION_MULTIPLIER
              : -360 * ROTATION_MULTIPLIER
            : 0,
        }}
        style={{
          cursor: showRotation ? "pointer" : "default",
          scale,
        }}
        transition={{
          rotate: {
            duration: showRotation ? 2 * ROTATION_MULTIPLIER : 0,
            repeat: showRotation ? Infinity : 0,
            ease: "linear",
          },
        }}
        onClick={toggleRotation}
      />
    </div>
  );
}
