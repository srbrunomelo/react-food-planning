import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { OrderContext, initialState } from './context'
import { reducer } from './reducer'  
import { OrderAction, ProductType } from './type'

const OrderProvider: React.FC = ({ children }) => { 
  const [state, dispatch] = useReducer(reducer, initialState);

  function addItem(produto:ProductType, amount = 1) { 
    const { id, name, value, photo } = produto 
    dispatch({ 
        type: OrderAction.ADD_PRODUCT, 
        payload: { 
          id: uuidv4(),
          amount: amount,
          product: {
            id, name, value, photo
          }
        } 
      }
    )  
  } 

  function removeItem(id: string) {
    dispatch({
      type: OrderAction.REMOVE_PRODUCT,
      payload: { id }
    })
  }

  function updateAmount(id: string, amount: number) {
    dispatch({
      type: OrderAction.CHANGE_AMOUNT,
      payload: {
        id, amount
      }
    })
  }

  return (
    <OrderContext.Provider value={{ ...state, addItem, removeItem, updateAmount }}>
      {children}
    </OrderContext.Provider>
  )
}

export { OrderProvider }