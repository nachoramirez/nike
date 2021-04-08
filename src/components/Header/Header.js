import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const HeaderContainer = styled(Container)`
  padding-bottom: 40px;
  height: 150px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

export const Logo = styled.img`
  height: 50px;
  margin: 40px 0px;
`

export const Cart = styled.img`
  height: 40px;
  position: absolute;
  right: 80px;
  top: 20px;
`

export const CartNumber = styled.h3`
  position: absolute;
  right: 60px;
  top: 10px;
`

export const Categories = styled(Container)`
  justify-content: space-evenly;
  height: 80px;
  width: 80%;
`
export const Category = styled.h1`
  padding: 0 10px 10px 10px;
  /* border-bottom: solid black 3px; */
  border-bottom: solid #9C9C9C 2px;
  font-size: 22px;
  transition: 300ms;
  &:hover {
    padding: 0 15px 40px 15px;
    font-size: 28px;
  }
`
