import { useTranslation } from 'react-i18next'
import { Title, Caption } from '../../../../..'
import { useOrder } from '../../../../../../context/order/useOrder'
import { Wrapper, DescriptionBox, Summary } from './styled'  

export const HeaderOrderPreview = () => {
  const { t } = useTranslation()
  const { itemsInCart } = useOrder()
  
  const renderSummaryLabelSingleItem = itemsInCart <= 1 && `${itemsInCart} ${t('components.orderPreview.components.headerOrderPreview.summary.single')}`
  const renderSummaryLabelMultipleItems = itemsInCart > 1 && `${itemsInCart} ${t('components.orderPreview.components.headerOrderPreview.summary.multiple')}`
  
  return (
    <Wrapper>
      <DescriptionBox>
        <Title label={t('components.orderPreview.components.headerOrderPreview.title')} /> 
      </DescriptionBox>
      <Summary>
        <Caption label={itemsInCart > 1 ? renderSummaryLabelMultipleItems : renderSummaryLabelSingleItem } />   
      </Summary>
    </Wrapper>
  )
}