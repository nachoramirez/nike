import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const CartHeaderContainer = styled(Container)`
  justify-content: space-between;
  align-items:center;
  border-bottom: solid 1px #7D7D7D;
`

export const CartTitle = styled.h1`
  padding-left: 15px;
`

export const ContinueShopping = styled.p`
    padding: 11px;
    color: #777777;
    text-decoration: underline #777777 solid; 
    &:hover {
      cursor: pointer;
    }

`