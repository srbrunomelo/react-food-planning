import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react' 
 

import { ThemeProvider } from "styled-components";
import theme from '../../styles/themes/light' 

import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n/';

import { SearchBar } from '.'  

describe('<SearchBar />', () => { 
  it('Deve renderizar o componente na tela',() => {
    render (
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <SearchBar />
        </I18nextProvider>
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('search')).toBeInTheDocument()
  })
})