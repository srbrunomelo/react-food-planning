import { useTranslation } from 'react-i18next' 
import { Title, Caption } from '../'
import { Wrapper } from './styled'

export const EmptyList = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Title label={t("components.emptyList.title")} />
      <Caption label={t("components.emptyList.caption")} />
    </Wrapper>
  )
}