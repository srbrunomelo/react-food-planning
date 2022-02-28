import { Title, Caption } from '../../../../../'
import { Wrapper, DescriptionBox, Summary } from './styled' 
import { HeaderType } from './type'

export const Header = ({ amount }: HeaderType ) => {
  return (
    <Wrapper>
      <DescriptionBox>
        <Title label="Meu Pedido" /> 
      </DescriptionBox>
      <Summary>
        <Caption label={`${amount} itens`} />   
      </Summary>
    </Wrapper>
  )
}