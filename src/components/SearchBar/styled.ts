import styled from "styled-components";

export const DrawerMenuActive = styled.span`
  cursor: pointer;
`; 

export const Activators =  styled.div`
  display: flex;
  justify-content: space-between;
` 

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.buttonColor.link};
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  background: ${props => props.theme.colors.boxColor};
  border-radius: 10px;
  padding: 15px; 
`;

export const Wrapper = styled.div``