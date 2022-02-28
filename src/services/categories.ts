import Http from "./http";

export const getAllCategories = async () => {
  const { data } = await Http.get('/categories')

  return data
}