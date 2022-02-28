import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Caption } from "."

import { ThemeProvider } from "styled-components";
import theme from '../../styles/themes/light' 

describe('<Caption />', () => {
  it('Deve renderizar uma string na tela', () => {
    render(
      <ThemeProvider theme={theme}>
        <Caption label="Caption" />
      </ThemeProvider> 
    )

    let caption = screen.getByText("Caption")
    expect(caption).toBeInTheDocument()
  })
})