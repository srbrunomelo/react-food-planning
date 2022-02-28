import { Row } from 'react-bootstrap'
import { LoaderComponent } from '../'
import { ProductItem, Pagination } from './../'
import { Wrapper } from './styled'
import { ProductType } from './type'
import ProductListFactory from './factories/ProductList'
 
export const ProductList = () => { 
  const { products, isLoading, isError, currentPage, setCurrentPage } = ProductListFactory()
  const renderList = products?.items.map((product: ProductType) => <ProductItem key={product.id} product={product} />)

  if (isLoading) return <LoaderComponent />
  if (isError) return <Wrapper>Error ao buscar dados</Wrapper>
  return (
    <Wrapper>
      <Row> 
        {renderList}
      </Row>
      <Row className="d-flex justify-content-center">
        <Pagination count={products.count} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Row>
    </Wrapper> 
  )
} 