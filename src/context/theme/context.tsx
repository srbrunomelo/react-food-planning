import { createContext } from "react";
import { InitialStateType, ThemeAction } from './type'

const initialState = { 
  theme: ThemeAction.LIGHT,
  change: (theme: string) => theme
}

const ThemeContext = createContext<InitialStateType>(initialState)

export { ThemeContext, initialState }