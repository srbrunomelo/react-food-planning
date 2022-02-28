import styled from "styled-components";
import { CategoryItemActiveType } from "./type";
 
export const Label =  styled.label<CategoryItemActiveType>`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.textColor.caption}; 
  cursor: pointer; 
`;

export const Wrapper = styled.div<CategoryItemActiveType>` 
  cursor: pointer; 
  display: flex;
  align-items: center;
  gap:10px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;  
  color: ${props => props.theme.textColor.title};
  border-bottom: 4px solid ${({ theme, active }) => active ? theme.colors.primary : theme.textColor.caption};
  padding-bottom: 10px;
  
`;