import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import { ThemeProvider } from "styled-components";
import theme from '../../styles/themes/light' 

import { Button } from '.'

describe('<Button />', () => {
  it('Deve renderizar um botão com o label "Fechar Pedido"', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label="Fechar Pedido" isFull /> 
      </ThemeProvider> 
    )
  
    let button = screen.getByRole('button', { name : 'Fechar Pedido' })
    expect(button).toBeInTheDocument()
  })
 
  it('Deve renderizar um botão desabilitado', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label="Desabilitado" isFull disabled /> 
      </ThemeProvider> 
    )
 
    let button = screen.getByTestId('button') 
    expect(button).toBeDisabled()
  })

  it('Deve renderizar um botão habilitado', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label="Habilitado" isFull /> 
      </ThemeProvider> 
    )
 
    let button =  screen.getByRole('button', { name: 'Habilitado' })
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
  })

  it('Deve renderizar um botão com a "variant" "primary"', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label="Primary" variant='primary' />
      </ThemeProvider>
    )

    let button = screen.getByTestId('button')
    expect(button).toBeInTheDocument()

    expect(button).toHaveStyle(`background-color: ${theme.colors.primary}`)
  })
})
