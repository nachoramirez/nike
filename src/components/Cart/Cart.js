import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const CartContainer = styled(Container)`
  margin-bottom: 150px;
  flex-direction: column;
  justify-content: start;
  width: 50%;
`

export const CartButtonContent = styled.p`
  border-radius:5px;
  color:white;
  background-color: #1a1a1a;
  vertical-align: bottom;
  width: 180px;
  height: 40px;
  font-size: 22px;
  padding: 15px 0px 10px 30px;
  margin: 10px;

  &:hover{
    background-color: #000000 ;
    transition: 1s ease-out;
  }
`