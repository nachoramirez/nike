import React from 'react'
import { ShoeCardContainer, ShoeImage, ShoeName, ShoePrice} from './ShoeCard'

const ShoeCard = () => {
    return (
        <ShoeCardContainer>
            <ShoeImage src='https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf7c05f8c/products/NI_BQ3203-100/NI_BQ3203-100-1.JPG' />
            <ShoeName>Zoom Gravity </ShoeName>
            <ShoePrice>$ 6000</ShoePrice>
        </ShoeCardContainer>
    )
}

export default ShoeCard