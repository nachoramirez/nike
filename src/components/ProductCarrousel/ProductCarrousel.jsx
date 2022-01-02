import React from 'react'
import { ProductCarrouselContainer, ItemImage } from './ProductCarrousel'
import Carousel from 'react-elastic-carousel'

const ProductCarrousel = ({ data }) => {

  const media = window.matchMedia("(max-width: 800px)")

  return (
    <ProductCarrouselContainer >
      <Carousel showArrows={media.matches ? false : true}>
        {data.map((item, id) => (
          <ItemImage key={id} src={item} />
        ))}
      </Carousel>
    </ProductCarrouselContainer>
  )
}

export default ProductCarrousel
