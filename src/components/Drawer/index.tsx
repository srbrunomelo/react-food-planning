import { Wrapper } from "./styled"
import { DrawerType } from "./type"

export const Drawer = ({ children, isOpen = false }: DrawerType) => {
  
  return (
    <Wrapper data-testid="drawer" isOpen={isOpen}>
      {children}
    </Wrapper>
  )
} 