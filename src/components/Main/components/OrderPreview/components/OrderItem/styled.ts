import styled from "styled-components";

import { ProductType } from './type'

export const DeleteItem = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;

  svg {
    cursor: pointer;  
  }
` 
 
export const Photo = styled.div<Pick<ProductType, 'photo'>>`
  width: 110px;
  height: 110px;
  background: ${({ photo }) => photo ? `url(${photo}) no-repeat center center` : '#333' };
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
  border-radius: 16px; 
`

export const Description = styled.div`
  width: 65%;
  padding: 0 0 0 10px;
`

export const NumberSelect = styled.input`
  border: none;
  margin-top: 15px;
  width: 80px;
  text-align: center;
  padding: 10px;
  border-radius: 9px;
  background: #EBEBEB;
`

export const Wrapper = styled.div`
  position: relative;
  border-radius: 16px;
  background:  ${props => props.theme.colors.body};
  padding: 15px;
  display: flex;
  margin: 20px;
`