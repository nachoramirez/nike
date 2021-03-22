import React from 'react'
import ShoeCard from '../ShoeCard/ShoeCard.jsx'
import { Container } from '../../containers/Containers.js'

import { ShoeCollectionContainer,CollectionCategory,CollectionResults } from './ShoeCollection.js'

const ShoeCollection = ({Category}) => {
    
  return (
    <Container>
      <CollectionCategory> {Category.toUpperCase().substring(1)} </CollectionCategory>
      <CollectionResults> 30 resultados </CollectionResults>
      <ShoeCollectionContainer>
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
      </ShoeCollectionContainer>
    </Container>
  )
}

export default ShoeCollection
