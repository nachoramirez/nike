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
  cursor: pointer;
`

export const Cart = styled.img`
  height: 40px;
  position: absolute;
  right: 80px;
  top: 20px;
  cursor: pointer;
`

export const CartNumber = styled.h3`
  position: absolute;
  right: 60px;
  top: 10px;
  cursor: pointer;
`

export const Categories = styled(Container)`
  justify-content: space-evenly;
  height: 80px;
  width: 80%;
`
export const Category = styled.h1`
  padding: 0 10px 10px 10px;
  border-bottom: ${(props) => (props.selected ? 'solid #673ab7 2px'  : 'solid #9C9C9C 2px')};
  font-size: 22px;
  transition: 300ms;
  color: ${(props) => (props.selected ? '#673ab7'  : 'black')};
  &:hover {
    cursor: pointer;
    border-bottom-color: #673ab7 ;
    padding: 0 15px 60px 15px;
    color: #673ab7;
    font-size: 28px;
  }
`
