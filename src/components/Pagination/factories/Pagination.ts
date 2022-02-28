import { PaginationFactoryType } from "./type"

const PaginationFactory = ({ setCurrentPage, currentPage }: PaginationFactoryType) => {

  const previousPage = () => setCurrentPage(currentPage - 1)
  const nextPage = () => setCurrentPage(currentPage + 1)
  const isDisabled = currentPage === 1 ? true : false

  return {
    previousPage,
    nextPage,
    isDisabled
  }
}

export default PaginationFactory