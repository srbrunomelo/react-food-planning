 
import { createContext } from 'react';
import { InitialStateType } from './type';
 
const initialState: InitialStateType = {
  order: [],
  totalValue: 0 ,
  addItem: () => {},
  removeItem: () => {},
  updateAmount: () => {}
} 

const OrderContext = createContext<InitialStateType>(initialState)
 
export { OrderContext, initialState }