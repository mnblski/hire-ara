import { createContext, useContext, useState, ReactNode } from "react";

interface Settings {
  showRotation: boolean;
  showScale: boolean;
  showIdleTimer: boolean;
}

interface SettingsContextType {
  settings: Settings;
  toggleSetting: (key: keyof Settings) => void;
}

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({
    showRotation: true,
    showScale: true,
    showIdleTimer: true,
  });

  const toggleSetting = (key: keyof Settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, toggleSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context)
    throw new Error("useSettings must be used within SettingsProvider");
  return context;
};
