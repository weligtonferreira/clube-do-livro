'use client';

import { createContext, useState } from 'react';

type ThemesOptions = 'light' | 'dark';

type ThemeContextProps = {
  theme: ThemesOptions;
  setLightTheme: () => void;
  setDarkTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setLightTheme() {},
  setDarkTheme() {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const currentTheme: ThemesOptions =
    (localStorage.getItem('theme') as ThemesOptions) ?? 'light';
  const [theme, setTheme] = useState<ThemesOptions>(currentTheme);

  function setLightTheme() {
    setTheme('light');
    localStorage.setItem('theme', 'light');
  }

  function setDarkTheme() {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
