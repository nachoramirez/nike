import React, { useEffect, useState} from 'react'
import ShoeCard from '../ShoeCard/ShoeCard.jsx'
import { Container } from '../../containers/Containers.js'
import { useSelector, useDispatch } from 'react-redux'
import { callCategoy } from '../../redux/Actions/index'
import Loading from '../Loading/Loading.jsx'

import {
  ShoeCollectionContainer,
  CollectionCategory,
  CollectionResults,
} from './ShoeCollection.js'

const ShoeCollection = ({ Category }) => {
  const dispatch = useDispatch()
  const data =  useSelector(store => store.initialReducer)
  const isLoading = useSelector(store => store.initialReducer.productsIsLoading)

  //calling api
  useEffect(() => {
    dispatch(callCategoy(Category))
  }, [Category]) //recall api when the element caregory changes

  return ( isLoading ? <Loading /> :
    <Container>
      <CollectionCategory>
        {Category.toUpperCase()}
      </CollectionCategory>
      <CollectionResults> {data.products.length} resultados </CollectionResults>
      <ShoeCollectionContainer>
        {data.products.map((data, key) => (
          <ShoeCard key={key} category={Category} data={data}/>
        ))}
      </ShoeCollectionContainer>
    </Container>
  )
}

export default ShoeCollection
