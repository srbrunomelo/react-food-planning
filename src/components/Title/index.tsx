import { Wrapper } from "./styled"
import { TitleType } from "./type"

export const Title = ({ label }: TitleType) => {
  return (
    <Wrapper>
      {label}
    </Wrapper>
  )
}