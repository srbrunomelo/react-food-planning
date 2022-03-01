import { IconType } from "./types"

const IconSun = ({ color, ...props }:IconType ) => {
  return (  
    <svg { ...props } width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5008 10.9375C13.8845 10.9375 10.938 13.8838 10.938 17.5C10.938 21.1162 13.8845 24.0625 17.5008 24.0625C21.1172 24.0625 24.0637 21.1162 24.0637 17.5C24.0637 13.8838 21.1172 10.9375 17.5008 10.9375ZM34.3454 16.4404L27.8715 13.207L30.1616 6.34375C30.4693 5.41406 29.5874 4.53223 28.6645 4.84668L21.8009 7.13672L18.5605 0.65625C18.1229 -0.21875 16.8787 -0.21875 16.4412 0.65625L13.2077 7.12988L6.33722 4.83984C5.40749 4.53223 4.52561 5.41406 4.84008 6.33691L7.13023 13.2002L0.656282 16.4404C-0.218761 16.8779 -0.218761 18.1221 0.656282 18.5596L7.13023 21.793L4.84008 28.6631C4.53245 29.5928 5.41432 30.4746 6.33722 30.1602L13.2008 27.8701L16.4344 34.3437C16.8719 35.2187 18.1161 35.2187 18.5536 34.3437L21.7872 27.8701L28.6508 30.1602C29.5805 30.4678 30.4624 29.5859 30.1479 28.6631L27.8578 21.7998L34.3317 18.5664C35.2205 18.1221 35.2205 16.8779 34.3454 16.4404V16.4404ZM23.6877 23.6865C20.2764 27.0977 14.7253 27.0977 11.314 23.6865C7.90273 20.2754 7.90273 14.7246 11.314 11.3135C14.7253 7.90234 20.2764 7.90234 23.6877 11.3135C27.099 14.7246 27.099 20.2754 23.6877 23.6865Z" fill={color} />
    </svg>    
  )
}

export default  IconSun