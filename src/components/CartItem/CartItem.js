import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const CartItemContainer = styled(Container)`
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: solid 1px #BBBBBB;
  padding: 10px;
`
export const CartItemImg = styled.img`
  height: 130px;
  width: 130px;
  object-fit: scale-down;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
`

export const CartItemDescription = styled.p`
  margin: 0px;
  padding-top: 6px;
`

export const CartItemPrice = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 28px;
`

export const CartItemEspecifications = styled.div`
  float: right;
  padding-left: 8px;
`
