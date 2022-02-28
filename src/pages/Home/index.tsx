import { Main, PageContent, SearchBar, ProductList, SessionTitle } from "../../components"
import { CategoryList } from './components/CategoryList'

const Home = () => {
  return (
    <Main>
      <PageContent>
        <SearchBar />
        <SessionTitle
          className="mt-4"
          title="Categorias"
          caption="Selecione uma categoria para encontrar o melhor de nós."
        />
        <CategoryList />
        <ProductList />
      </PageContent>
    </Main>
  )
}
 
export default Home