import styled from 'styled-components';

export const Wrapper = styled.p`   
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;   
  color: ${({ theme }) => theme.textColor.caption};
`;