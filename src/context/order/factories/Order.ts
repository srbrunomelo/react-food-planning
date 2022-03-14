import { OrderType, InitialStateType, ActionType, OrderAction } from '../type';

type OrderFactoryType = { state: InitialStateType, action: ActionType }

function OrderFactory({ state, action }:OrderFactoryType) {
  const { type, payload } = action;
  const { order, totalValue, itemsInCart } = state
 
  const currentTotalValue = (value: string, amount: number) => (Number(value) * amount) + totalValue
  
  const getTotalValue = (array: OrderType[]) => {
    return array.reduce((previousValue: number, currentValue: OrderType) => (currentValue.amount * Number(currentValue.product.value)) + previousValue, 0)
  }

  const getTotalitemsInCart = (array: OrderType[]) => {
    return array.reduce((previousValue: number, currentValue: OrderType) => currentValue.amount + previousValue, 0)
  }
   
  const addProduct = () => {  
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
  }

  const removeProduct = () => {
    console.log('removeProduct')
    // let currentItem = order.find(row => row.id === payload.id)
    // const totalValueItem = Number(currentItem.product.value) * currentItem.amount

    // return {
    //   ...state,
    //   order: order.filter(row => row.id !== payload.id),
    //   totalValue: totalValue - totalValueItem,
    //   itemsInCart:  itemsInCart - currentItem.amount
    // }
  }

  const changeAmount = () => { 
    // let newArray = [...order] 
    // const elementsIndex = newArray.findIndex(row => row.id === payload.id)
    // newArray[elementsIndex] = { ...newArray[elementsIndex], amount: payload.amount}

    // return {
    //   ...state,
    //   order: newArray,
    //   totalValue: getTotalValue(newArray),
    //   itemsInCart: getTotalitemsInCart(newArray)
    // } 
  }
   
  const actions = {
    [OrderAction.ADD_PRODUCT]: () => addProduct(),
    [OrderAction.REMOVE_PRODUCT]: () => removeProduct(),
    [OrderAction.CHANGE_AMOUNT]:  () => changeAmount()
  }

  return {
    actions
  }
}

export default OrderFactory