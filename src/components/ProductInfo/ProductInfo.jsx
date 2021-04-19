import React from 'react'
import { Link } from 'react-router-dom'
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

const ProductInfo = () => {
  const sizeList = [34, 35, 36, 37, 38, 39, 40, 41, 42]
  return (
    <ProductInfoContainer>
      <ProductTitle> Zapatillas Nike Super Re copadas</ProductTitle>
      <ProductId> Item № 8504</ProductId>
      <ProductPrice> $8.400</ProductPrice>
      <FormTitle> Size: </FormTitle>
      <SizeForm>
        {sizeList.map((id) => (
          <>
            <Input type="radio" id={id} name="size" value={id} />
            <Label for={id}>{id}</Label>
          </>
        ))}
      </SizeForm>
      <Link to='/cart'>
        <SubmitButton> ADD TO CART</SubmitButton>
      </Link>
    </ProductInfoContainer>
  )
}

export default ProductInfo
