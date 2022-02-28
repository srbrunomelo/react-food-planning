import { DrawerMenuItem } from '../DrawerMenuItem'
import { Wrapper } from './styled'

import useCurrentPage from '../../../../hooks/useCurrentPage'

export const DrawerMenu = () => {
  const { isCurrentPage } = useCurrentPage()

  return (
    <Wrapper>
      <DrawerMenuItem label="Inicio" path="/" active={isCurrentPage('/')} />
      <DrawerMenuItem label="Favoritos" path="/wishlist" active={isCurrentPage('/wishlist')} />
      <DrawerMenuItem label="Sair" path="/sair" active={false} /> 
    </Wrapper>
  )
}