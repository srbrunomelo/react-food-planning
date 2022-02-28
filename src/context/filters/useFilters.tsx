import { useContext } from "react";
import FiltersContext from "./context";

export const useFilters = () => {
  const context = useContext(FiltersContext)

  return context
}