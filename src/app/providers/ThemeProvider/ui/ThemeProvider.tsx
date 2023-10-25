import React, {FC, useMemo, useState} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGTH;

const ThemeProvider: FC = ({children}) => {
  const [theme,setTheme] = useState<Theme>(defaultTheme);

  

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;