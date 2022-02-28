import { useContext } from "react";
import { OrderContext } from "./context";

export const useOrder = () => {
  const context = useContext(OrderContext)

  return context
}