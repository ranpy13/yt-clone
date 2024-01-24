import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    theme: "dark",
    toggle: ()=>{},
});

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme")
    return value || "light";
  }
  return "light";
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggle = () => {
    setTheme((theme) => (theme==="light" ? "dark" : "light"))
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
