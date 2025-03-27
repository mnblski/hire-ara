interface SettingConfig {
  id: string;
  key: "showRotation" | "showScale" | "showIdleTimer";
  label: string;
  description: string;
}

export const SETTINGS_CONFIG: SettingConfig[] = [
  {
    id: "rotation-toggle",
    key: "showRotation",
    label: "Enable Rotation",
    description: "Toggles the rotation animation of the React logo",
  },
  {
    id: "scale-toggle",
    key: "showScale",
    label: "Enable Mouse Distance Scaling",
    description: "Adjusts logo size based on mouse position",
  },
  {
    id: "timer-toggle",
    key: "showIdleTimer",
    label: "Show Idle Timer",
    description: "Displays the time elapsed since last mouse movement",
  },
] as const;
