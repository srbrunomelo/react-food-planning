import { Main, PageContent, SessionTitle } from "../../components"

const Wishlist = () => {
  return ( 
    <Main>
      <PageContent>
        <SessionTitle
          className="mt-4"
          title="Favoritos"
          caption="Seus itens selecionados como favoritos."
        />
      </PageContent> 
    </Main>
  )
}

export default Wishlist