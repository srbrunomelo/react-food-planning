import { Icon } from '..'
 
import { useTheme } from "styled-components"
import { Wrapper } from "./styled" 

export const LoaderPage = () => { 
  const { colors } = useTheme() 
  
  return (
    <Wrapper data-testid="loader">
      <Icon name="Loading" color={colors.primary} />
    </Wrapper>
  )
} 