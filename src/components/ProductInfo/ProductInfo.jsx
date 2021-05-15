import React from 'react'
import { useHistory } from 'react-router-dom'
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

const ProductInfo = ({data}) => {
  const {sizes, name, price, id } = data
  const History = useHistory()

  return (
    <ProductInfoContainer>
      <ProductTitle> {name}</ProductTitle>
      <ProductId> Item № {id}</ProductId>
      <ProductPrice> {price }</ProductPrice>
      <FormTitle> Size: </FormTitle>
      <SizeForm>
        {sizes.map((id) => (
          <>
            <Input type="radio" id={id} name="size" value={id} />
            <Label for={id}>{id}</Label>
          </>
        ))}
      </SizeForm>

      <SubmitButton onClick={() => History.push('/cart')}> ADD TO CART</SubmitButton>
    </ProductInfoContainer>
  )
}

export default ProductInfo
