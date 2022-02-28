import { Icon } from '../../..'
import { DrawerMenuItemType } from "./type"
import { Wrapper, Label } from "./styled" 
import {  useTheme } from 'styled-components'

export const DrawerMenuItem = ({ label, path, active }: DrawerMenuItemType) => {
  const { colors, buttonColor } = useTheme()
  const isActive = active ? colors.primary : buttonColor.link

  return ( 
    <Wrapper to={path}>
      <Label active={active}>{label}</Label>
      <Icon name="ArrowRight" color={isActive} />
    </Wrapper>
  )
}