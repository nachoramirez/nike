import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const HeaderContainer = styled.div`
  display: flex;
  padding-bottom: 40px;
  height: 150px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    padding-bottom: 20px;
  }
`

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`

export const Cart = styled.img`
  height: 40px;
  position: absolute;
  right: 80px;
  top: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    right: 25px;
    top: 10px;
  }
`

export const CartNumber = styled.h3`
  position: absolute;
  right: 60px;
  top: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    right: 5px;
    top: 0;
  }
`

export const Categories = styled(Container)`
  @media (max-width: 768px) {
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    z-index: ${(props) => (props.isOpen ? 10 : -5)};
    width: 100%;
    height: 90vh;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    transition: opacity 400ms ease-out;
  }
`
export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  width: 80%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
export const NavBtn = styled.img`
  z-index: 11;
  margin-right: 24px;
  justify-content: flex-end;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 0px;
    top: 0;
    height: 50px;
    width: 50px;
  }
`

export const Category = styled.h1`
  padding: 0 10px 10px 10px;
  border-bottom: ${(props) =>
    props.selected ? 'solid #673ab7 2px' : 'solid #9C9C9C 2px'};
  font-size: 22px;
  transition: 300ms;
  color: ${(props) => (props.selected ? '#673ab7' : 'black')};
  &:hover {
    cursor: pointer;
    border-bottom-color: #673ab7;
    padding: 0 15px 60px 15px;
    color: #673ab7;
    font-size: 28px;
  }
  @media (max-width: 768px) {
    &:hover {
      padding: 0 10px 10px 10px;
      color: #673ab7;
      font-size: 22px;
    }
  }
`
