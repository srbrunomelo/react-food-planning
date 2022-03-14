import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9;
  align-items: center;
  background: ${({ theme }) => theme.colors.body};
  width: 100%;
  height: 100vh;
  position: fixed;
`;