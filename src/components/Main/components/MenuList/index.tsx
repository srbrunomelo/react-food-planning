import { Wrapper } from './styled'

import { MenuListItem } from '../MenuListItem'
import useCurrentPage from '../../../../hooks/useCurrentPage'
import { useContextTheme } from '../../../../context/theme/useContextTheme'

export const MenuList = ({ ...rest }) => {
  const { isCurrentPage } = useCurrentPage()
  const { theme, change, ThemeAction } = useContextTheme()

  const handleIcon = theme === ThemeAction.LIGHT ? 'Moon' : 'Sun'
  const handleLabelTheme = theme === ThemeAction.LIGHT ? ThemeAction.DARK : ThemeAction.LIGHT

  return (
    <Wrapper {...rest}>
      <MenuListItem path="/" icon={'Home'} active={isCurrentPage('/')} />
      <MenuListItem path="/wishlist" icon={'Heart'} active={isCurrentPage('/wishlist')} /> 
      <MenuListItem onClick={() => change(handleLabelTheme)} icon={handleIcon} /> 
    </Wrapper>
  )
}