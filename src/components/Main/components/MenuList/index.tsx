import { Wrapper } from './styled'

import { MenuListItem } from '../MenuListItem'
import useCurrentPage from '../../../../hooks/useCurrentPage'

export const MenuList = ({ ...rest }) => {
  const { isCurrentPage } = useCurrentPage()

  return (
    <Wrapper {...rest}>
      <MenuListItem path="/" icon={'Home'} active={isCurrentPage('/')} />
      <MenuListItem path="/wishlist" icon={'Heart'} active={isCurrentPage('/wishlist')} /> 
    </Wrapper>
  )
}