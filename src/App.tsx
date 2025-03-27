import { ReactLogo } from "./components/react-logo/ReactLogo";
import { IdleTimer } from "./components/idle-timer/IdleTimer";
import { Providers } from "./providers/Providers";
import { Sidebar } from "./components/sidebar/Sidebar";
import styles from "./App.module.scss";

function App() {
  return (
    <Providers>
      <div>
        <Sidebar />
        <div className={styles.container}>
          <ReactLogo />
          <IdleTimer />
        </div>
      </div>
    </Providers>
  );
}

export default App;
