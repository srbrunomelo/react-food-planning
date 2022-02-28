import { Title, Caption } from ".."
import { Wrapper } from './styled'
import { SessionTitleType } from "./type"

export const SessionTitle = ({ title, caption, ...rest }: SessionTitleType) => {
  return (
    <Wrapper {...rest}>
      <Title label={title} />
      { caption && <Caption label={caption} /> } 
    </Wrapper>
  )
}