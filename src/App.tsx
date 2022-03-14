import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global/global.css'
import "./i18n" 

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/global'
import lightTheme from './styles/themes/light' 
import darkTheme from './styles/themes/dark' 

import MainRoutes from './routes'
import { useContextTheme } from './context/theme/useContextTheme';

const queryClient = new QueryClient(); 

function App() {   
  const { theme, ThemeAction } = useContextTheme()
 
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === ThemeAction.LIGHT ? lightTheme : darkTheme}>
        <GlobalStyle />
        <MainRoutes />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App