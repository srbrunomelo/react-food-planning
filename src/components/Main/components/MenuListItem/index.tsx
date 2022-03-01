import { Link } from 'react-router-dom'
import { Wrapper } from './styled'
import { useTheme } from 'styled-components'
import { MenuListItemType } from './type'

import { Icon } from '../../../'

export const MenuListItem = ({ onClick, active, icon, path, ...rest }: MenuListItemType) => {
  const { colors, buttonColor } = useTheme()
  const isActive = active ? colors.primary : buttonColor.link

  return (
    <Wrapper active={active} {...rest} onClick={onClick}>
     {
       path &&
       <Link to={path}>
        <Icon name={icon} color={isActive} />
      </Link>
     }
     
     { !path && <Icon name={icon} color={isActive} /> } 
    </Wrapper>
  )
}