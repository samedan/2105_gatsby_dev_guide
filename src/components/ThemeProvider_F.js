import React, { createContext, useContext } from "react";

const themes = {
  lightTheme: {
    type: "light",
    fontColor: "#2b2c38",
    background: "#fff",
  },
  darkTheme: {
    type: "dark",
    fontColor: "#dcdcdc",
    background: "#2b2c38",
  },
};

const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={themes.dark}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
