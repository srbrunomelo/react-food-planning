import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  gap: 60px;
  overflow: scroll;
  
  @media(max-width: 700px) {
    overflow: none;
    gap: 30px;
  }
`