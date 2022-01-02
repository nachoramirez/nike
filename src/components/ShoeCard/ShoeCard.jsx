import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ShoeCardContainer, ShoeImage, ShoeName, ShoePrice } from './ShoeCard'

const ShoeCard = ({ data, category }) => {
  const history = useHistory()
  if (category === undefined) {
    switch (data.id.charAt(0)) {
      case '0':
        category = 'running'
        break
      case '1':
        category = 'training'
        break
      case '2':
        category = 'futbol'
        break
      case '3':
        category = 'sportswear'
        break
    }
  }

  return (
    <ShoeCardContainer onClick={() => history.push(`/nike/${category}/${data.id}`)}>
      <ShoeImage src={data.images[0]} />
      <ShoeName>{data.name} </ShoeName>
      <ShoePrice>${data.price}</ShoePrice>
    </ShoeCardContainer>
  )
}

export default ShoeCard
