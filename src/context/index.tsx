import { FiltersProvider } from "./filters/context"
import { OrderProvider } from "./order/Provider"
import { MenuProvider } from "./menu/Provider"
import { ThemeProvider } from "./theme/Provider"

const GlobalContext = ({ children }: { children: JSX.Element }) => {
  return (
    <FiltersProvider>
      <OrderProvider>
        <MenuProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </MenuProvider>
      </OrderProvider> 
    </FiltersProvider>
  )
}

export default GlobalContext