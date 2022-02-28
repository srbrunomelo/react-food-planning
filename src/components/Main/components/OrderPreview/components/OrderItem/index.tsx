import { useTheme } from 'styled-components'
import { Icon, ProductTitle, ProductValue } from '../../../../../'
import { useOrder } from '../../../../../../context/order/useOrder'
import { Wrapper, DeleteItem, Photo, Description, NumberSelect } from './styled'

import { OrderItemType } from './type'

export const OrderItem = ({ order }: OrderItemType) => {  
  const { textColor } = useTheme()
  const { removeItem, updateAmount } = useOrder()
  
  function handleUpdateAmount (value: number) {   
    updateAmount(order.id, value)
  }
 
  return (
    <Wrapper>  
      <Photo photo={order.product.photo}></Photo>
      <Description>
        <ProductTitle label={order.product.name} />
        <ProductValue value={order.product.value} />
        <NumberSelect min="1" type="number" value={order.amount} onChange={(e) => handleUpdateAmount(Number(e.target.value))} />
      </Description>
      <DeleteItem onClick={() => removeItem(order.id)}>
        <Icon name="Close" color={textColor.title} />
      </DeleteItem> 
    </Wrapper>
  )
} 