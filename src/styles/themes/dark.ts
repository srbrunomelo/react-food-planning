import { css, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    body: "#121214",
    primary: "#FF4E4E",
    boxColor: "#000"
  },
  
  textColor: {
    typography: '#e1e1e6',
    title: '#e1e1e6',
    caption: '#e1e1e6'
  },

  buttonColor: {
    button: '#FF4E4E',
    link: '#e1e1e6',
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