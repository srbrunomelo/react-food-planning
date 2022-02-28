import { useState } from "react"
import { useQuery } from "react-query"
import { useFilters } from "../../../context/filters/useFilters"
import { getAllProducts } from "../../../services/products"

const ProductListFactory = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { state: { categoryId, searchTerm } } = useFilters()
 
  const { data: products, isLoading, isError } = useQuery(
    ['products', { page: currentPage, category_id: categoryId, term: searchTerm }], 
    () => getAllProducts(currentPage, categoryId, searchTerm), {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false
    })

  return {
    products,
    isLoading,
    isError,
    currentPage,
    setCurrentPage
  }
}

export default ProductListFactory