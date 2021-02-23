import React from 'react'
import ShoeCard from '../ShoeCard/ShoeCard.jsx'

import { TrendsContainer, TrendsShoesContainer } from './Trends'

const Trends = () => {
  return (
    <TrendsContainer>
      <h1> TOP TRENDING</h1>
      <TrendsShoesContainer>
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
      </TrendsShoesContainer>
    </TrendsContainer>
  )
}

export default Trends
