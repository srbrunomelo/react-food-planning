import { useTranslation } from "react-i18next"
import { Main, PageContent, SessionTitle } from "../../components"

const Wishlist = () => {
  const { t } = useTranslation()
  return ( 
    <Main>
      <PageContent>
        <SessionTitle
          className="mt-4"
          title={t('pages.wishlist.sections.descriptionPage.title')}
          caption={t('pages.wishlist.sections.descriptionPage.description')}
        />
      </PageContent> 
    </Main>
  )
}

export default Wishlist