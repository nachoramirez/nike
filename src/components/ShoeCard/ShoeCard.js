import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const ShoeCardContainer = styled(Container)`
  width: 200px;
  height: 350px;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  padding: 10px;
  justify-content: space-between;
  margin: 8px 15px ;
`

export const ShoeImage = styled.img`
  height: 200px;
  object-fit: cover;
  border-bottom: solid black 1px;
`

export const ShoeName = styled.h1`
  font-weight: 300;
  font-size: 25px;
  padding-left: 20px;
`

export const ShoePrice = styled.h1`
    font-size: 25px;
    padding-left:20px;
`
