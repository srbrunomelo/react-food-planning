import { Wrapper } from "./styled"
import { ProductTitleType } from "./type"

export const ProductTitle = ({ label }: ProductTitleType) => {
  return (
    <Wrapper>
      {label}
    </Wrapper>
  )
}