import styled from "styled-components";

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    padding-bottom: 20px; 
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.buttonColor.button};
  }
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.boxColor};
  width: 100%;
  position: absolute;
  padding: 20px;
  bottom: 0; 
`