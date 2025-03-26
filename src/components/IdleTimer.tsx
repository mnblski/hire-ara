import { useIdleTimer } from "../hooks/useIdleTimer";
import styles from "./IdleTimer.module.scss";
export function IdleTimer() {
  const idleTime = useIdleTimer();

  return (
    <div className={styles.idleText}>
      Mouse idle for: <b>{idleTime}</b> seconds
    </div>
  );
}
