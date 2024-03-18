
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

// Theme provider 
// ============== 
export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    console.log('changeTheme');
    setTheme((thm) => {
      if (thm === 'light')
        return 'dark'
      else
        return 'light'
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} >
      {children}
    </ThemeContext.Provider>


  );
};

// Use Theme 
// ========= 


export const useTheme = () => {
  console.log('useTheme');

  const context = useContext(ThemeContext);

  if (!context) {
    console.log('error!');
  }
  return context;

};
