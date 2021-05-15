import React, { useEffect} from 'react'
import ShoeCard from '../ShoeCard/ShoeCard.jsx'
import { Container } from '../../containers/Containers.js'
import { useSelector, useDispatch } from 'react-redux'
import { CallCategoy } from '../../redux/Actions/index'
import Loading from '../Loading/Loading.jsx'

import {
  ShoeCollectionContainer,
  CollectionCategory,
  CollectionResults,
} from './ShoeCollection.js'

const ShoeCollection = ({ Category }) => {
  const dispatch = useDispatch()
  const data =  useSelector(store => store.initialReducer.products)


  useEffect(() => {
    dispatch(CallCategoy(Category))
  }, [Category])

  return ( data === undefined ? <Loading /> :
    <Container>
      <CollectionCategory>
        {Category.toUpperCase()}
      </CollectionCategory>
      <CollectionResults> {data.length} resultados </CollectionResults>
      <ShoeCollectionContainer>
        {data.map((data) => (
          <ShoeCard category={Category} data={data}/>
        ))}
      </ShoeCollectionContainer>
    </Container>
  )
}

export default ShoeCollection
