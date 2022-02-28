import { useTranslation } from 'react-i18next'
import { Button } from '../../../../..' 
import { formatReal } from '../../../../../../helpers/formatReal'
import { Wrapper, TotalItems } from './styled'

export const FooterOrderPreview = ({ totalValue = 0.00 }) => { 
  const { t } = useTranslation()

  return (
    <Wrapper>
      <TotalItems>
        <span>{t('components.orderPreview.components.footerOrderPreview.title')}</span>
        <span>{formatReal(totalValue)}</span>
      </TotalItems>
      <Button label={t('components.orderPreview.components.footerOrderPreview.actions.button')} isFull /> 
    </Wrapper>
  )
}