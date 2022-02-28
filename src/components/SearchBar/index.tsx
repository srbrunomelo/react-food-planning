import { ChangeEvent, useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { Icon } from '../'
import { useFilters } from '../../context/filters/useFilters'
import { Wrapper, Form, Input, Activators, DrawerMenuActive } from './styled'

import useDebounce from '../../hooks/useDebounce'
import { Col, Row } from 'react-bootstrap'
import { useMenuContext } from '../../context/menu/useMenuContext'

export const SearchBar = () => {
  const { buttonColor } = useTheme()
  const { isOpen, toogle } = useMenuContext() 
  const [searchField, setSearchField] = useState('')
  const { state, updateFilters } = useFilters()
  const debouncedValue = useDebounce<string>(searchField, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearchField(event.target.value)

  useEffect(() => updateFilters({ ...state, searchTerm: searchField, categoryId: '' }), [debouncedValue])
  
  return ( 
    <Wrapper> 
      <Row className='d-flex align-items-center'>
        <Col className='col-2 col-md-12'> 
          <Activators className='d-block d-md-none d-flex'>
            <DrawerMenuActive >
              <Icon name="Closed" color={buttonColor.link} onClick={() => toogle(!isOpen)} />
            </DrawerMenuActive>  
          </Activators> 
        </Col>
        <Col className="col-10 col-md-12"> 
          <Form> 
            <Icon name="Search" color={buttonColor.link} />
            <Input 
              type="text" 
              placeholder='Buscar algo ...' 
              value={searchField} 
              onChange={handleChange} 
            />
          </Form> 
        </Col>
      </Row>
    </Wrapper> 
  )
}