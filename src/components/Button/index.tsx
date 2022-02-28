import { ButtonType } from "./type"
import { Wrapper } from './styled'

export const Button = ({ 
  variant = 'default', 
  onClick, 
  isFull = false, 
  label, 
  disabled = false, 
  size = 'large',  
  ...rest
}: ButtonType) => {
  return (
    <Wrapper 
      data-testid="button"
      isFull={isFull} 
      variant={variant} 
      disabled={disabled} 
      size={size} 
      onClick={onClick}
      {...rest}
    >
      {label}
    </Wrapper>
  )
}