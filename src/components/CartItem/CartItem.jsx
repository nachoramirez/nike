import React from 'react'
import {
  CartItemContainer,
  CartItemImg,
  CartItemPrice,
  CartItemDescription,
  CartItemEspecifications
} from './CartItem'

const CartItem = () => {
  return (
    <CartItemContainer>
      <div>
        <CartItemImg src="https://http2.mlstatic.com/D_NQ_NP_729302-MLA42436554038_072020-W.webp" />
        <CartItemEspecifications>
          <h3> Nike Air Max Bruin Vapor </h3>
          <CartItemDescription> Gender: Unisex</CartItemDescription>
          <CartItemDescription> Color: Black</CartItemDescription>
        </CartItemEspecifications>
      </div>
      <div>
        <CartItemPrice>$800.00</CartItemPrice>
      </div>
    </CartItemContainer>
  )
}

export default CartItem
