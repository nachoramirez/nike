import styled from 'styled-components'

export const ProductCarrouselContainer = styled.div`
  width: 40%;
  height: 40%;
  @media (max-width: 800px) {
    width: 100%;
    height:  100%;
  }
`

export const ItemImage = styled.img`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
`
