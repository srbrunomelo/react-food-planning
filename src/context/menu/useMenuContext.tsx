import { useContext } from "react";
import { MenuContext } from "./context";

export const useMenuContext = () => {
  const context = useContext(MenuContext)

  return context
}