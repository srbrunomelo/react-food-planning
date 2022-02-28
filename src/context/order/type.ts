export type InitialStateType = {
  order: OrderType[];
  totalValue: number
  addItem: (produto:ProductType) => void
  removeItem: (id: string) => void
  updateAmount: (id: string, amount: number) => void
} 

export type OrderType = {
  id: string;
  amount?: number;
  product?: ProductType;
}

export type ProductType = {
  id: string;
  name: string;
  value: string;
  photo: string;
}

export type ActionType = {
  type: OrderAction
  payload?: OrderType
}

export enum OrderAction { 
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CHANGE_AMOUNT = 'CHANGE_AMOUNT'
}

export type ContextType = {  
  order: OrderType[];
  totalValue: string   
}