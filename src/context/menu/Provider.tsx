import { useState } from "react";

import { MenuContext } from "./context";

const MenuProvider: React.FC = ({ children }) => {
  const [isOpen, toogle] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpen, toogle }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuProvider }