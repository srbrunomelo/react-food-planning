import styled from 'styled-components';

export const Wrapper = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${({ theme }) => theme.textColor.caption};
`;