import { useState } from "react";
import { ThemeContext, initialState } from "./context";

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, change] = useState(initialState.theme)

  return (
    <ThemeContext.Provider value={{ theme, change }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }