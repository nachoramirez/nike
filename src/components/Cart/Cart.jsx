import React from 'react'
import { useHistory } from 'react-router-dom'
import { CartContainer, CartButton, CartEmpty} from './Cart'

import { useSelector } from 'react-redux'

import CartHeader from '../CartHeader/CartHeader.jsx'
import CartItem from '../CartItem/CartItem.jsx'

const Cart = ({ history }) => {
  const History = useHistory(useHistory)

  const data = useSelector((store) => store.initialReducer.cart)

  console.log(data.length)

  return data.length === 0 ? (
    <CartContainer>
      <CartHeader />
      <CartEmpty> Your cart is empty :(</CartEmpty>
      <CartButton onClick={() => History.push('')}>GO SHOPPING 🠒</CartButton>
    </CartContainer>
  ) : (
    <CartContainer>
      <CartHeader history={history} />
      {data.map((data,key) => (
        <CartItem key={key} data={data} />
      ))}
      <CartButton onClick={() => History.push('/nike')}>CHECKOUT 🠒</CartButton>
    </CartContainer>
  )
}

export default Cart
