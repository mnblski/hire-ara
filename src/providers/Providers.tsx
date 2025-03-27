import { ReactNode } from "react";
import { SettingsProvider } from "../context/SettingsContext";

export const Providers = ({ children }: { children: ReactNode }) => (
  <SettingsProvider>{children}</SettingsProvider>
);
