import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

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

export const SubmitButton = styled.button`
  justify-self:center;
  background-color: #673ab7;
  border: 2px solid;
  height: 50px;
  width: 80%;
  color: #fff;
  transition: 0.25s;
  &:hover,
  &:focus { 
    border-color: #4D2B8C;
    color: #fff;
    box-shadow: inset 30em 0 0 0 #4D2B8C;
  }
`