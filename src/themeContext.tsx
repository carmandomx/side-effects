import React, { Children, createContext, FC  } from "react";

const themes = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
      name: 'light'
    },
    dark: {
      backgroundColor: '#000000',
      color: '#ffffff',
      name: 'dark'
    }
  };
  
  const contextValue = {
    currentTheme: themes.dark,
    changeTheme: function() {
        this.currentTheme = this.currentTheme.name === 'dark' ? themes.light : themes.dark
    }

  }
  const ThemeContext = createContext(contextValue);
  ThemeContext.displayName = 'ThemeContext';

interface Props  {
  name?: string
  children: JSX.Element
}

export const ThemeProvider: React.FC<Props> = (props) => {
    return (
        <ThemeContext.Provider value={contextValue}>
          { props.children }
        </ThemeContext.Provider>
    )
    
} 

  export default ThemeContext;