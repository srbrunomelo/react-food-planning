import { Wrapper, OrderList, EndOfLine } from './styled'

import { OrderItem } from './components/OrderItem'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useOrder } from '../../../../context/order/useOrder' 
 
export const OrderPreview = ({ className }:{ className: string }) => {
  const { order, totalValue  } = useOrder() 

  const renderOrderList = order.map(item => (
    <OrderItem key={item.id} order={item} />
  ))
 
  return (
    <Wrapper className={className}>
      <OrderList>
        <Header amount={order.length} /> 
        {renderOrderList} 
        <EndOfLine>
          É só isso.
        </EndOfLine>
      </OrderList> 
      <Footer totalValue={totalValue} />
    </Wrapper>
  )
}