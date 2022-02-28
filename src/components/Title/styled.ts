import styled from 'styled-components';

export const Wrapper = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;  
  color: ${({ theme }) => theme.textColor.title};
`;