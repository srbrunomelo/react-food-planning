import { formatReal } from "../../helpers/formatReal"
import { Wrapper } from "./styled"
import { ProductValueType } from "./type"

export const ProductValue = ({ value }: ProductValueType) => {
  return (
    <Wrapper>
      {formatReal(Number(value))}
    </Wrapper>
  )
}