import { DrawerMenuItem } from '../DrawerMenuItem'
import { Wrapper } from './styled'

import useCurrentPage from '../../../../hooks/useCurrentPage'
import { useTranslation } from 'react-i18next'

export const DrawerMenu = () => {
  const { t } = useTranslation()
  const { isCurrentPage } = useCurrentPage()

  return (
    <Wrapper>
      <DrawerMenuItem label={t("components.drawerMenu.items.home")} path="/" active={isCurrentPage('/')} />
      <DrawerMenuItem label={t("components.drawerMenu.items.wishlist")} path="/wishlist" active={isCurrentPage('/wishlist')} /> 
    </Wrapper>
  )
}