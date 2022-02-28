import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { ThemeProvider } from "styled-components";
import theme from '../../styles/themes/light' 

import { Drawer } from '.'

describe('<Drawer />', () => {
  it('Deve iniciar fechado', () => {
    render(
      <ThemeProvider theme={theme}>
        <Drawer>
          <div>Drawer</div>
        </Drawer>
      </ThemeProvider>
    )

    let drawer = screen.getByTestId('drawer')
    expect(drawer).toBeInTheDocument()
    expect(drawer).toHaveStyle({
      left: '-100%'
    })
  })

  it('Testar componente Aberto', () => {
    render(
      <ThemeProvider theme={theme}>
        <Drawer isOpen>
          <div>Drawer</div>
        </Drawer>
      </ThemeProvider>
    )

    let drawer = screen.getByTestId('drawer')
    expect(drawer).toBeInTheDocument()
    expect(drawer).toHaveStyle({
      left: '0'
    })
  })
})