import { useTranslation } from "react-i18next"
import { Main, PageContent, SearchBar, ProductList, SessionTitle } from "../../components"
import { CategoryList } from './components/CategoryList'

const Home = () => {
  const { t } = useTranslation()

  return (
    <Main>
      <PageContent>
        <SearchBar />
        <SessionTitle
          className="mt-4"
          title={t("pages.home.sections.categories.title")}
          caption={t("pages.home.sections.categories.description")}
        />
        <CategoryList />
        <ProductList />
      </PageContent>
    </Main>
  )
}
 
export default Home