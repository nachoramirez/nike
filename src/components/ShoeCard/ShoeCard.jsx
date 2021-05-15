import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ShoeCardContainer, ShoeImage, ShoeName, ShoePrice } from './ShoeCard'

const ShoeCard = ({data, category}) => {
  const history = useHistory()
  
  return ( data === undefined ? (
    <ShoeCardContainer onClick={() => history.push('/item/:id')}>
       <ShoeImage src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf7c05f8c/products/NI_BQ3203-100/NI_BQ3203-100-1.JPG" />
        <ShoeName>Zoom Gravity </ShoeName>
        <ShoePrice>$ 6000</ShoePrice>
    </ShoeCardContainer>
  ) :
    <ShoeCardContainer onClick={() => history.push(`/${category}/${data.id}`)}>
      <ShoeImage src={data.images[0]}/>
      <ShoeName>{data.name} </ShoeName>
      <ShoePrice>{data.price}</ShoePrice>
    </ShoeCardContainer>
  )
}

export default ShoeCard
