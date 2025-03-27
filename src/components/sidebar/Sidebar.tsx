import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";
import { SettingToggle } from "./SettingToggle";
import { SETTINGS_CONFIG } from "./config";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { settings, toggleSetting } = useSettings();

  return (
    <>
      <motion.div
        ref={sidebarRef}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={styles.sidebar}
        role="complementary"
        aria-label="Settings sidebar"
      >
        <button
          ref={toggleButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="settings-content"
          aria-label={
            isOpen ? "Close settings sidebar" : "Open settings sidebar"
          }
          className={styles.toggleButton}
        >
          {isOpen ? "←" : "→"}
        </button>

        <div
          id="settings-content"
          role="region"
          aria-label="Settings options"
          className={styles.settingsContent}
        >
          <h2 id="settings-title" tabIndex={-1} className={styles.title}>
            Settings
          </h2>

          <fieldset className={styles.fieldset}>
            <legend className="visually-hidden">Feature toggles</legend>

            <div className={styles.togglesContainer}>
              {SETTINGS_CONFIG.map(({ id, key, label, description }) => (
                <SettingToggle
                  key={id}
                  id={id}
                  checked={settings[key]}
                  onChange={() => toggleSetting(key)}
                  label={label}
                  description={description}
                />
              ))}
            </div>
          </fieldset>
        </div>
      </motion.div>
    </>
  );
};
