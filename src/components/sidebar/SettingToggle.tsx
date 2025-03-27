import styles from "./SettingsToggle.module.scss";

interface SettingToggleProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  label: string;
  description: string;
}

export function SettingToggle({
  id,
  checked,
  onChange,
  label,
  description,
}: SettingToggleProps) {
  return (
    <div className={styles.settingToggle}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        aria-describedby={`${id}-description`}
      />
      <label htmlFor={id}>{label}</label>
      <div id={`${id}-description`} className="visually-hidden">
        {description}
      </div>
    </div>
  );
}
