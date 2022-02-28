import { IconType } from "./types"

const IconArrowRight = ({ color, ...props }:IconType ) => {
  return (  
  <svg {...props} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L6 6L2 10" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  )
}

export default  IconArrowRight