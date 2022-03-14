import { InitialStateType, ActionType, OrderType, OrderAction } from './type' 
// import OrderFactory from './factories/Order';

export function reducer(state: InitialStateType, action: ActionType) {
  // const { actions } = OrderFactory({ state, action })

  const { type, payload } = action;
  const { order, totalValue, itemsInCart } = state
 
  const currentTotalValue = (value: string, amount: number) => (Number(value) * amount) + totalValue
  
  const getTotalValue = (array: OrderType[]) => {
    return array.reduce((previousValue: number, currentValue: OrderType) => (currentValue.amount * Number(currentValue.product.value)) + previousValue, 0)
  }

  const getTotalitemsInCart = (array: OrderType[]) => {
    return array.reduce((previousValue: number, currentValue: OrderType) => currentValue.amount + previousValue, 0)
  } 
  
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
          totalValue: currentTotalValue(arrayClone[elementsIndex].product.value, payload.amount),
          itemsInCart: getTotalitemsInCart(arrayClone)
        }
      }

      return {
        ...state,
        order: [...order, payload],
        totalValue: currentTotalValue(payload.product.value, payload.amount),
        itemsInCart: itemsInCart + payload.amount
      }
  
    case OrderAction.REMOVE_PRODUCT:  
      let currentItem = order.find(row => row.id === payload.id)
      const totalValueItem = Number(currentItem.product.value) * currentItem.amount

      return {
        ...state,
        order: order.filter(row => row.id !== payload.id),
        totalValue: totalValue - totalValueItem,
        itemsInCart:  itemsInCart - currentItem.amount
      }
 
    case OrderAction.CHANGE_AMOUNT: 
      let newArray = [...order] 
      const elementsIndex = newArray.findIndex(row => row.id === payload.id)
      newArray[elementsIndex] = { ...newArray[elementsIndex], amount: payload.amount}

      return {
        ...state,
        order: newArray,
        totalValue: getTotalValue(newArray),
        itemsInCart: getTotalitemsInCart(newArray)
      } 

    default:
      return state
  }
}