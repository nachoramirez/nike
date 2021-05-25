import React from 'react'
import {
  ProductInfoContainer,
  ProductTitle,
  ProductId,
  ProductPrice,
  SizeForm,
  Label,
  Input,
  FormTitle,
  SubmitButton,
} from './ProductInfo.js'

import { store } from 'react-notifications-component'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, setSize } from '../../redux/Actions/index'

const ProductInfo = ({ data }) => {
  const { sizes, name, price, id, size } = data

  const dispatch = useDispatch()

  const addToCartAndAlert = () => {
    dispatch(addToCart(data))
    store.addNotification({
      title: 'SUCCESS!',
      message: 'your product was added to the cart successfully.',
      type: 'success',
      container: 'top-left',
      dismiss: {
        duration: 2500,
        onScreen: false,
      },
    })
  }
  const showWarningAlert = () => {
    store.addNotification({
      title: 'SELECT A SIZE!',
      message: 'Please select a size to add the product to the cart.',
      type: 'warning',
      container: 'top-left',
      dismiss: {
        duration: 2500,
        onScreen: false,
      },
    })
  }

  return (
    <ProductInfoContainer>
      <ProductTitle> {name}</ProductTitle>
      <ProductId> Item № {id}</ProductId>
      <ProductPrice>${price}</ProductPrice>
      <FormTitle> Size: </FormTitle>
      <SizeForm>
        {sizes.map((id) => (
          <>
            <Input type="radio" id={id} name="size" value={id} />
            <Label onClick={() => dispatch(setSize(id))} for={id}>
              {id}
            </Label>
          </>
        ))}
      </SizeForm>
      <SubmitButton
        onClick={
          size === undefined ? () => showWarningAlert() : () => addToCartAndAlert()
        }
      >
        ADD TO CART
      </SubmitButton>
    </ProductInfoContainer>
  )
}

export default ProductInfo
