import styled from "styled-components"; 

import { MenuListItemType } from './type'
 
export const Wrapper = styled.div<Pick<MenuListItemType, 'active'>>`
  border-right: 4px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.boxColor };
  display: flex;
  justify-content: center;
  padding: 10px;  
  margin-bottom:20px;
`