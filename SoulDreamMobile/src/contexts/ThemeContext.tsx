import React, { createContext, useContext, useState, useMemo } from 'react';
import { themes, Theme } from '../theme/themes'; // Ruta a themes.ts
export type { Theme };

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  isDarkMode: boolean;
}

const defaultThemeMode: 'light' | 'dark' = 'light';

// Asegurar que el valor inicial del contexto es correcto
const ThemeContext = createContext<ThemeContextType>({
  theme: themes[defaultThemeMode],
  isDarkMode: false, // Inicialmente es false porque defaultThemeMode es 'light'
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState<'light' | 'dark'>(defaultThemeMode);

  const toggleTheme = () => {
    setCurrentThemeName(prev => prev === 'light' ? 'dark' : 'light');
  };

  const activeTheme = useMemo(() => themes[currentThemeName], [currentThemeName]);
  const isDarkMode = currentThemeName === 'dark';

  return (
    <ThemeContext.Provider value={{ theme: activeTheme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}; 