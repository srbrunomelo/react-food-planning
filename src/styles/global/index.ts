import { createGlobalStyle } from "styled-components"; 

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box; 
    font-family: ${props => props.theme.fonts.poppins};
  }

  *::-webkit-scrollbar {
    width: 4px;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};;  
  }

	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body {
		line-height: 1;
    background: ${props => props.theme.colors.body};
    color: ${props => props.theme.textColor.typography}; 
    font-size: 100%; 
		vertical-align: baseline;
	}

  a {
    text-decoration: none;
  }
  
`

export default GlobalStyle