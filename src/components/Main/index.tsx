import { MainType } from './type'
import { Wrapper, Content, FloatingTray, Header, Logo, DisplayName } from './styled'

import { DrawerMenu } from './components/DrawerMenu' 

import { OrderPreview } from './components/OrderPreview'
import { SideMenu } from './components/SideMenu'

import { Row } from 'react-bootstrap'
import { Icon, Drawer } from '..'
import { useTheme } from 'styled-components'

import LogoPng from '../../assets/logo.png'
import { useMenuContext } from '../../context/menu/useMenuContext'

export const Main = ({ children }: MainType) => {
  const { buttonColor } = useTheme()
  const { isOpen, toogle } = useMenuContext() 

  return (
    <Wrapper fluid>
      <Drawer isOpen={isOpen}>
        <Header>
          <Logo title="Pizzaria" src={LogoPng} />
          <Icon
            onClick={() => toogle(!isOpen)}
            name="Open"
            color={buttonColor.link}
          />
        </Header>
        <DisplayName>
          <span className="occupation">Pizzaria</span>
          <span className="company">DON REACT</span>
        </DisplayName>
        <DrawerMenu />
      </Drawer>  
      <FloatingTray className='d-block d-md-none'>
        <Icon name="Car" color='#FFF' />
      </FloatingTray>
      <Row>
        <SideMenu className="col-md-1 d-none d-md-block" /> 
        <Content>
          {children}
        </Content>
        <OrderPreview className="col-md-3 col-lg-3 d-none d-md-block" />
      </Row>
    </Wrapper>
  )
} 