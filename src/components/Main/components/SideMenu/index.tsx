import { Icon } from '../../../'
import { Wrapper, HandleDrawer } from './styled'
import { useTheme } from 'styled-components';

import { MenuList } from '../MenuList'

import { useMenuContext } from '../../../../context/menu/useMenuContext';

export const SideMenu = ({ ...rest }) => {
  const { buttonColor } = useTheme()
  const { isOpen, toogle } = useMenuContext() 

  return (
    <Wrapper {...rest}> 
      <HandleDrawer>
        <Icon onClick={() => toogle(!isOpen)} name="Closed" color={buttonColor.link} /> 
      </HandleDrawer>
      <MenuList />
    </Wrapper>
  )
}