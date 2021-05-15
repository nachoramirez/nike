import styled from 'styled-components'
import { Container, Button } from '../../containers/Containers.js'

export const ProductInfoContainer = styled(Container)`
  width: 40%;
  flex-direction: column;
`

export const ProductTitle = styled.h1`
  font-weight: 1;
`

export const ProductId = styled.p`
  margin-top: 0;
`

export const ProductPrice = styled.h1`
  font-family: Helvetica, sans-serif;
`
export const Label = styled.label`
  text-align: center;
  height: 25px;
  width: 25px;
  padding: 10px;
  border: solid 2px #ccc;
  border-radius: 80px;
  transition: all 0.1s;
  margin: 5px;
  &:hover {
    border: solid 2px #673ab7;
    cursor: pointer;
  }
`

export const Input = styled.input`
  display: none;
  &:checked {
    & + Label {
      border: solid 2px #673ab7;
    }
  }
`
export const SizeForm = styled.form`
  margin: 50px 0px;
`
export const FormTitle = styled(ProductTitle)`
  margin: 10px 0 0 0;
`

export const SubmitButton = styled(Button)`
  height: 50px;
  width: 80%;
`
