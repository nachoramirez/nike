import React from 'react'
import { CartHeaderContainer, CartTitle, ContinueShopping } from './CartHeader'
import { Link } from 'react-router-dom'

const CartHeader = ({ history }) => {
  return (
    <CartHeaderContainer>
      <CartTitle> Your Cart </CartTitle>
      <ContinueShopping onClick='./'> Continous shopping </ContinueShopping>
    </CartHeaderContainer>
  )
}

export default CartHeader
