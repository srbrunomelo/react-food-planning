import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import { Button } from '..'

import { Product } from './type'

export const Action = styled(Button)`
  position: absolute;
  display: flex;
  right: 10px;
  bottom: 10px;
`

export const Photo = styled.div<Pick<Product, 'photo'>>`
  width: 100%;
  height: 160px;
  background: ${({ photo }) => photo ? `url(${photo}) no-repeat center center` : '#333' };
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-radius: 16px 16px 0 0;
`

export const Description = styled.div`
  padding: 10px;
`

export const Body = styled.div`
  position: relative;
  ${props => props.theme.shadowCss};
  width: 100%;
  border-radius: 16px;
`

export const Wrapper = styled(Col)`
`