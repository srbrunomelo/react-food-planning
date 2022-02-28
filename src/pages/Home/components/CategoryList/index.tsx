import { Wrapper } from './styled' 
import { CategoryItem } from '../CategoryItem' 
import { CategoryType } from './type'

import CategoryFactory from './factories/Category'
 
export const CategoryList = () => {
  const { categories } = CategoryFactory()

  const renderList = categories?.map((category: CategoryType) => (
    <CategoryItem key={category.id} {...category} />
  ))
 
  return (
    <Wrapper>
      <CategoryItem key={0} id={``} label="Todos" icon="FullList" />
      { renderList }
    </Wrapper>
  )
}