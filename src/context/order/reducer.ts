import { InitialStateType, ActionType } from './type'
import { OrderAction } from './type';

export function reducer(state: InitialStateType, action: ActionType) {
  const { type, payload } = action;
  const { order, totalValue } = state

  const currentTotalValue = (value: string, amount: number) => (Number(value) * amount) + totalValue

  switch(type) {
    case OrderAction.ADD_PRODUCT:     
      let row = order.find(row => row.product.id === payload.product.id)
      
      if (row) { 
        let arrayClone = [...order]
        const elementsIndex = arrayClone.findIndex(order => order.id === row.id) 
        arrayClone[elementsIndex] = { ...arrayClone[elementsIndex], amount: Number(arrayClone[elementsIndex].amount) + 1}

        return {
          ...state,
          order: arrayClone,
          totalValue: currentTotalValue(arrayClone[elementsIndex].product.value, payload.amount)
        }
      }

      return {
        ...state,
        order: [...order, payload],
        totalValue: currentTotalValue(payload.product.value, payload.amount)
      }
  
    case OrderAction.REMOVE_PRODUCT:  
      let currentItem = order.find(row => row.id === payload.id)
      const totalValueItem = Number(currentItem.product.value) * currentItem.amount

      return {
        ...state,
        order: order.filter(row => row.id !== payload.id),
        totalValue: totalValue - totalValueItem
      }
 
    case OrderAction.CHANGE_AMOUNT:
      let newArray = [...order]
      const elementsIndex = newArray.findIndex(row => row.id === payload.id) 
      newArray[elementsIndex] = { ...newArray[elementsIndex], amount: payload.amount}

      // fazer uma copia do item
      // modificar esse item copiado com as novas quantidades.
      // incluir essa copia modificada no array geral


      // return {
      //   ...state,
      //   order: newArray
      //   // totalValue: 
      // }
      return state

    default:
      return state
  }
} 