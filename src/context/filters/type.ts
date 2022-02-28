export type StateType = {
  categoryId?: string
  searchTerm?: string 
}

export type FiltersType = {
  state: StateType
  updateFilters(state: StateType): void
}
