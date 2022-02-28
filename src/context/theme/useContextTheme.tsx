import { useContext } from "react";
import { ThemeContext } from "./context";
import { ThemeAction } from './type'

export const useContextTheme = () => {
  const { theme, change } = useContext(ThemeContext)

  return {
    theme,
    change,
    ThemeAction
  }
}