import 'styled-components';
 
declare module 'styled-components' {
  export interface DefaultTheme { 
    colors: { 
      body: string
      primary: string  
      boxColor: string  
    },
    textColor: { 
      typography: string
      title: string  
      caption: string  
    },
    buttonColor: { 
      button: string
      link: string
      color: string
    },
    fonts: { 
      poppins: string 
    },
    shadowCss: any
  }
} 