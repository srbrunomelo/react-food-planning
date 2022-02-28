import { FiltersProvider } from "./filters/context"
import { OrderProvider } from "./order/Provider"
import { MenuProvider } from "./menu/Provider"

const GlobalContext = ({ children }: { children: JSX.Element }) => {
  return (
    <FiltersProvider>
      <OrderProvider>
        <MenuProvider>
          {children}
        </MenuProvider>
      </OrderProvider> 
    </FiltersProvider>
  )
}

export default GlobalContext