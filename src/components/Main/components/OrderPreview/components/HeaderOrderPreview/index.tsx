import { useTranslation } from 'react-i18next'
import { Title, Caption } from '../../../../..'
import { Wrapper, DescriptionBox, Summary } from './styled' 
import { HeaderType } from './type'

export const HeaderOrderPreview = ({ amount }: HeaderType ) => {
  const { t } = useTranslation()
  
  const renderSummaryLabelSingleItem = amount <= 1 && `${amount} ${t('components.orderPreview.components.headerOrderPreview.summary.single')}`
  const renderSummaryLabelMultipleItems = amount > 1 && `${amount} ${t('components.orderPreview.components.headerOrderPreview.summary.multiple')}`
  
  return (
    <Wrapper>
      <DescriptionBox>
        <Title label={t('components.orderPreview.components.headerOrderPreview.title')} /> 
      </DescriptionBox>
      <Summary>
        <Caption label={amount > 1 ? renderSummaryLabelMultipleItems : renderSummaryLabelSingleItem } />   
      </Summary>
    </Wrapper>
  )
}