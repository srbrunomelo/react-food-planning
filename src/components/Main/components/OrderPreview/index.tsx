import { Wrapper, OrderList, EndOfLine } from './styled'

import { OrderItem } from './components/OrderItem'
import { HeaderOrderPreview } from './components/HeaderOrderPreview'
import { FooterOrderPreview } from './components/FooterOrderPreview'
import { useOrder } from '../../../../context/order/useOrder' 
import { useTranslation } from 'react-i18next'
 
export const OrderPreview = ({ className }:{ className: string }) => {
  const { t } = useTranslation()
  const { order, totalValue } = useOrder() 

  const renderOrderList = order.map(item => (
    <OrderItem key={item.id} order={item} />
  ))
 
  return (
    <Wrapper className={className}>
      <OrderList>
        <HeaderOrderPreview /> 
        {renderOrderList} 
        <EndOfLine> 
          {t('components.orderPreview.components.endOfLine.label')}
        </EndOfLine>
      </OrderList> 
      <FooterOrderPreview totalValue={totalValue} />
    </Wrapper>
  )
}