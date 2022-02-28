import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global/global.css'
import "./i18n" 

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/global'
import theme from './styles/themes/light' 

import MainRoutes from './routes'

const queryClient = new QueryClient(); 
  

function App() {   

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainRoutes />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App