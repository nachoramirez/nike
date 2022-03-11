import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const ShoeCardContainer = styled(Container)`
  background-color: white;
  width: auto;
  height: 350px;
  flex-direction: column;
  border: #c9c9c9 solid 1px;
  border-radius: 10px;
  padding: 10px;
  justify-content: space-between;
  margin: 8px 15px;
  cursor: pointer;
  &:hover {
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    box-shadow: rgba(77, 43, 140) 0px 5px 15px;
  }

  @media (max-width:820px) {
    width: 40%;
    height: 350px;
    margin: 8px 0;
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
