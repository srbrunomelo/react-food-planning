import { Button } from '../../../../../' 
import { formatReal } from '../../../../../../helpers/formatReal'
import { Wrapper, TotalItems } from './styled'

export const Footer = ({ totalValue = 0.00 }) => { 
 
  return (
    <Wrapper>
      <TotalItems>
        <span>Valor do pedido</span>
        <span>{formatReal(totalValue)}</span>
      </TotalItems>
      <Button label="Fechar Pedido" isFull /> 
    </Wrapper>
  )
}