import styled from "styled-components"
import { Link } from 'react-router-dom'

import { DrawerMenuItemType } from './type'

export const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 5px;
  margin-left: -30px;
`

export const Label = styled.label<Pick<DrawerMenuItemType, 'active'>>`
  cursor: pointer;
  margin: 10px 0; 
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px; 
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.buttonColor.link};
`