import { PageContentType } from "./type"
import { Wrapper } from './styled'

export const PageContent = ({ children }: PageContentType) => { 
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}