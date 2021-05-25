import React from 'react'
import { useDispatch } from 'react-redux'
import {
  CartItemContainer,
  CartItemImg,
  CartItemPrice,
  CartItemDescription,
  CartItemEspecifications,
  DeleteViewContainer,
  DeleteButton
} from './CartItem'

import { deleteCartItem } from '../../redux/Actions/index'

const CartItem = ({ data }) => {
  const { name, id, images, price, size } = data

  const dispatch = useDispatch()

  return (
    <CartItemContainer>
      <div>
        <CartItemImg src={images[0]} />
        <CartItemEspecifications>
          <h3> {name} </h3>
          <CartItemDescription> Size: {size}</CartItemDescription>
          <CartItemDescription> Color: Black</CartItemDescription>
        </CartItemEspecifications>
      </div>
      <div>
        <CartItemPrice>${price}</CartItemPrice>
          <DeleteButton onClick={() => dispatch(deleteCartItem(data))}>Delete</DeleteButton>
      </div>
    </CartItemContainer>
  )
}

export default CartItem
