import { memo, useState } from 'react'
import { ProductTitle, ProductValue } from '../'
import { useOrder } from '../../context/order/useOrder'
import { Wrapper, Body, Photo, Description, Action } from './styled'
import { ProductItemType } from './type'

const ProductItem = ({ product }: ProductItemType) => {
  const [active, setActive] = useState(false)
  const { addItem } = useOrder()
 
  return (
    <Wrapper 
      onMouseEnter={() => setActive(true)} 
      onMouseLeave={() => setActive(false)} 
      className="col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-4"
    >
     <Body>
      <Photo photo={product.photo} className='mb-2' />
      <Description>
        <ProductTitle label={product.name} />
        <ProductValue value={product.value} />
      </Description>

      { active && <Action size='small' label='+' onClick={() => addItem(product)} /> }
     </Body>
    </Wrapper>
  )
}

export default memo(ProductItem)