import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import { LoaderPage } from '.'

import { ThemeProvider } from "styled-components";
import theme from '../../styles/themes/light' 

describe('<LoaderPage />', () => {
  it('Deve conter um icon ao centro do elemento', () => {
    render(
      <ThemeProvider theme={theme}>
        <LoaderPage />
      </ThemeProvider>
    )

    let loaderPage = screen.getByTestId('loader')
    expect(loaderPage).toBeInTheDocument();
    expect(loaderPage).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff',
      width: '100%',
      height: '100vh',
      position: 'fixed'
    })
  }) 
})