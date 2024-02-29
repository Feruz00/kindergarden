import React, { createContext, useState, useContext, ReactNode, useEffect  } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(()=>{
    const currentTheme = localStorage.getItem("theme")
    if(!currentTheme){
      if( window.matchMedia && window.matchMedia("prefers-color-schema: dark)")) setIsDarkMode(true)
    }
    else setIsDarkMode(currentTheme === 'dark')
  },[])

  useEffect(()=>{
    document.body.className = isDarkMode ? 'theme-dark': 'theme-light'
    localStorage.setItem("theme", isDarkMode ? "dark": 'light')
  },[isDarkMode])
  const value: ThemeContextType = {
    isDarkMode,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
