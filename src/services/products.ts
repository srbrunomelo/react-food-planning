import Http from "./http"; 

export const getAllProducts = async (page = 1, categoryId: string, term: string) => {
  const params = {
    name: term.toLowerCase() || null,  
    limit: 8,  
    page: page, 
    category_id: categoryId || null
  }

  const { data } = await Http.get(`/products`, { params }) 

  return data
}