import { useTranslation } from "react-i18next"
import { Wrapper } from "./styled"

export const LoaderComponent = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      {t('components.loaderComponent.label')}
    </Wrapper>
  )
} 