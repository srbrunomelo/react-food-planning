import { Col } from 'react-bootstrap'
import styled from 'styled-components'

export const HandleDrawer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  
  svg {  cursor: pointer;  }
`;

export const Wrapper = styled(Col)`
  background: ${props => props.theme.colors.boxColor}; 
  width: 90px;  
  padding-right: 0; 
`; 