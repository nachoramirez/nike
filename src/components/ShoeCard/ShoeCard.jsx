import React, {useState, useEffect}from 'react'
import { useHistory } from 'react-router-dom'
import { ShoeCardContainer, ShoeImage, ShoeName, ShoePrice } from './ShoeCard'

const ShoeCard = () => {
  const history = useHistory()
  const [redirect, useRedirect] = useState(false)

  useEffect(() => {
    if(redirect){
        history.push('/item/:id')
    } 
  },[redirect])

  const HandleClick = () => {
      useRedirect(true)
      console.log(redirect)
  }

  return (
    <ShoeCardContainer onClick={() => HandleClick()}>
        <ShoeImage src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf7c05f8c/products/NI_BQ3203-100/NI_BQ3203-100-1.JPG" />
        <ShoeName>Zoom Gravity </ShoeName>
        <ShoePrice>$ 6000</ShoePrice>
    </ShoeCardContainer>
  )
}

export default ShoeCard
