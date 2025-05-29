'use client';

import { lightTheme, darkTheme } from '@/app/styles/theme';
import { ThemeProvider } from 'styled-components';
import { createContext, useState, PropsWithChildren, useContext } from 'react';

type ThemeProvideProps = PropsWithChildren;

type ThemeContextType = {
  isLightTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvide');
  }
  return context;
}

export function ContextProvider({ children }: ThemeProvideProps) {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  function toggleTheme() {
    setIsLightTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
