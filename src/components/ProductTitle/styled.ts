import styled from 'styled-components';

export const Wrapper = styled.p`   
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px; 
  color: ${({ theme }) => theme.textColor.typography};
`;