import { useQuery } from "react-query"
import { getAllCategories } from "../../../../../services/categories"

const CategoryFactory = () => {
  const { data: categories, isLoading, isError } = useQuery(['categories'], () => getAllCategories(), {
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false
   })

  return {
    categories,
    isLoading,
    isError
  }
}

export default CategoryFactory