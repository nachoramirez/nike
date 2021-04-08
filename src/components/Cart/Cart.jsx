import React from 'react'
import { CartContainer, CartButton,CartButtonContent } from './Cart'
import { Link } from 'react-router-dom'

import CartHeader from '../CartHeader/CartHeader.jsx'
import CartItem from '../CartItem/CartItem.jsx'

const Cart = ({history}) => {
  return (
    <CartContainer>
      <CartHeader history={history} />
      <CartItem />
      <CartItem />
      <CartItem />
      <Link style={{ color: 'inherit',textDecoration: 'inherit'}}>
        <CartButtonContent>CHECKOUT 🠒</CartButtonContent>
      </Link>
    </CartContainer>
  )
}

export default Cart
