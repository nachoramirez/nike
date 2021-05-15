import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const ShoeCardContainer = styled(Container)`
  background-color: white;
  width: 18%;
  height: 320px;
  flex-direction: column;
  border: #C9C9C9 solid 1px;
  border-radius: 10px;
  padding: 10px;
  justify-content: space-between;
  margin: 8px 15px;
  cursor: pointer;
  &:hover{
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgba(77, 43, 140) 0px 5px 15px;
  }
`

export const ShoeImage = styled.img`
  height: 50%;
  object-fit: cover;
  border-bottom: solid black 1px;
`

export const ShoeName = styled.h1`
  font-weight: 300;
  font-size: 1.4em;
  padding-left: 5%;
`

export const ShoePrice = styled.h1`
  font-size: 1.5em;
  padding-left: 5%;
`
