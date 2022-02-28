import styled from 'styled-components'
import { Col, Container } from 'react-bootstrap' 

export const Header = styled.div` 
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

export const DisplayName = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  .occupation {  
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px; 
    color: ${props => props.theme.colors.primary};
  }

  .company {  
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 25px;  
    color: ${props => props.theme.colors.primary}; 
  }
`
 
export const Logo = styled.img``;






export const Wrapper = styled(Container)`
  padding-left: 0;
`; 

export const Content = styled(Col)`
  padding: 0px;

  @media (max-width: 750px) {
    padding: 10px 0 10px 10px;
  }
`;

export const FloatingTray = styled.span`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;

  ${props => props.theme.shadowCss}

  background: ${props => props.theme.colors.primary};
  padding: 15px;
  z-index: 99;
` 