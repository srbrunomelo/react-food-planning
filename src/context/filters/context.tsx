import { createContext, useState, useCallback } from 'react'
import { FiltersType, StateType } from './type'

const DEFAULT_VALUE = {
  state: {
    categoryId: '',
    searchTerm: ''
  },
  updateFilters: () => {}
}

const FiltersContext = createContext<FiltersType>(DEFAULT_VALUE)

const FiltersProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<StateType>(DEFAULT_VALUE.state)

  const updateFilters = useCallback((newState: StateType) => {
    setState(newState)
  }, [setState])

  return (
   <FiltersContext.Provider value={{ state, updateFilters }}>
     {children}
   </FiltersContext.Provider>
  )
}

export { FiltersProvider }
export default FiltersContext