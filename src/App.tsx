import { ReactLogo } from "./components/ReactLogo";
import styles from "./App.module.scss";
import { IdleTimer } from "./components/IdleTimer";

function App() {
  return (
    <div className={styles.container}>
      <ReactLogo />
      <IdleTimer />
    </div>
  );
}

export default App;
