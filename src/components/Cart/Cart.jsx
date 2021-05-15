import React from 'react'
import { useHistory } from 'react-router-dom'
import { CartContainer, CartButton  } from './Cart'
import { Link } from 'react-router-dom'

import CartHeader from '../CartHeader/CartHeader.jsx'
import CartItem from '../CartItem/CartItem.jsx'

const Cart = ({ history }) => {
  const History = useHistory(useHistory)
  return (
    <CartContainer>
      <CartHeader history={history} />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartButton onClick={() => History.push()}>
        CHECKOUT 🠒
      </CartButton>
    </CartContainer>
  )
}

export default Cart
