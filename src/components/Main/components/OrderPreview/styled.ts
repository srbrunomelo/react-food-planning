import { Col } from "react-bootstrap";
import styled from "styled-components";

export const EndOfLine = styled.div`
  width: 100%;
  height: 150px;
  text-align: center;
  font-style: italic;
`

export const OrderList = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll; 
`

export const Wrapper = styled(Col)`
  position: relative;
  height: 100vh; 
  background: ${props => props.theme.colors.boxColor}; 
  padding: 0;
`