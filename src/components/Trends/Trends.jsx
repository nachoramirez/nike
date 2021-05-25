import React, { useEffect } from 'react'
import ShoeCard from '../ShoeCard/ShoeCard.jsx'

import { TrendsContainer, TrendsShoesContainer } from './Trends'

import { useSelector } from 'react-redux'

const Trends = () => {
  const data = useSelector((store) => store.initialReducer.trending)

  return (
    <TrendsContainer>
      <h1> TOP TRENDING</h1>
      <TrendsShoesContainer>
        {data.map((data, key) => (
          <ShoeCard data={data} key={key} />
        ))}
      </TrendsShoesContainer>
    </TrendsContainer>
  )
}

export default Trends
