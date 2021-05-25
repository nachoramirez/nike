import React from 'react'
import { ProductCarrouselContainer, ItemImage } from './ProductCarrousel'
import Carousel from 'react-elastic-carousel'

const ProductCarrousel = ({ data }) => {
  return (
    <ProductCarrouselContainer>
      <Carousel>
        {data.map((item, id) => (
          <ItemImage key={id} src={item} />
        ))}
      </Carousel>
    </ProductCarrouselContainer>
  )
}

export default ProductCarrousel
