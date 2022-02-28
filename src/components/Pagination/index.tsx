import { Button } from "../"
import { Wrapper } from "./styled"
import { PaginationType } from "./type"

import PaginationFactory from './factories/Pagination'

export const Pagination = ({ currentPage, setCurrentPage, count }: PaginationType) => {
  const { isDisabled, nextPage, previousPage } = PaginationFactory({ setCurrentPage, currentPage })
 
  return (
    <Wrapper className="col-12 col-md-5 d-flex justify-content-center"> 
      <Button disabled={isDisabled} label="<" onClick={previousPage} />
      <Button label=">" onClick={nextPage} /> 
    </Wrapper>  
  )
}