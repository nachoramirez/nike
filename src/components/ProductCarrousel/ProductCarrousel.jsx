import React from 'react'
import { ProductCarrouselContainer, ItemImage } from './ProductCarrousel'
import Carousel from 'react-elastic-carousel'

const CarrouselImages = [
  'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2c8d4511/products/NI_BQ3204-002/NI_BQ3204-002-1.JPG',
  'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2c8d4511/products/NI_BQ3204-002/NI_BQ3204-002-2.JPG',
  'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2c8d4511/products/NI_BQ3204-002/NI_BQ3204-002-3.JPG',
  'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2c8d4511/products/NI_BQ3204-002/NI_BQ3204-002-4.JPG',
]

const ProductCarrousel = () => {
  return (
    <ProductCarrouselContainer>
      <Carousel>
        {CarrouselImages.map((item, id) => (
          <ItemImage key={id} src={item} />
        ))}
      </Carousel>
    </ProductCarrouselContainer>
  )
}

export default ProductCarrousel
