import styled from "styled-components";
import { DrawerType } from './type'

export const Wrapper = styled.div<DrawerType>` 
  transition: 500ms;
  display: block;
  left:  ${({ isOpen }) => isOpen ? '0' : '-100%' }; 
  position: absolute;
  background: ${({ theme }) => theme.colors.body}; 
  z-index: 2;
  padding: 25px;
  height: 100vh;
  width: 100%;
  max-width: 350px;
  
  @media(max-width: 700px) {
    max-width: 100%;
  }
  
  ${({ theme }) => theme.shadowCss}
`