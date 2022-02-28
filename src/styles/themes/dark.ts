import { css, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    body: "#121214",
    primary: "#FF4E4E",
    boxColor: "#000"
  },
  
  textColor: {
    typography: '#616161',
    title: '#616161',
    caption: '#616161'
  },

  buttonColor: {
    button: '#FF4E4E',
    link: '#616161',
    color: "#000"
  }, 

  fonts: {  
    poppins: `'Poppins', sans-serif`
  },

  shadowCss: css`
    background: #000;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1); 
  `,
}

export default theme 