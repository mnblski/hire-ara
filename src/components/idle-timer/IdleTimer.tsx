import { useIdleTimer } from "../../hooks/useIdleTimer";
import styles from "./IdleTimer.module.scss";
import { useSettings } from "../../context/SettingsContext";
export function IdleTimer() {
  const {
    settings: { showIdleTimer },
  } = useSettings();

  const idleTime = useIdleTimer(showIdleTimer);

  if (!showIdleTimer) return null;

  return (
    <div className={styles.idleText}>
      Mouse idle for: <b>{idleTime}</b> seconds
    </div>
  );
}
