import { css, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    body: "#333",
    primary: "#FF4E4E",
    boxColor: "#555"
  },
  
  textColor: {
    typography: '#616161',
    title: '#353535',
    caption: '#A6A6A6'
  },

  buttonColor: {
    button: '#5C5C5C',
    link: '#A6A6A6',
    color: "#FFF"
  }, 

  fonts: {  
    poppins: `'Poppins', sans-serif`
  },

  shadowCss: css`
    background: #FFFFFF;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1); 
  `,
}

export default theme 