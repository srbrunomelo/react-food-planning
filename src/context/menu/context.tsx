import { createContext } from "react";
import { InitialStateType } from './type'

const initialState = { 
  isOpen: false,
  toogle: (state: boolean) => state
}

const MenuContext = createContext<InitialStateType>(initialState)

export { MenuContext, initialState }