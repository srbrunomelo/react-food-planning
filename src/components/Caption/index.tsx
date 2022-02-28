import { Wrapper } from "./styled"
import { CaptionType } from "./type"

export const Caption = ({ label }: CaptionType) => {
  return (
    <Wrapper>
      {label}
    </Wrapper>
  )
}