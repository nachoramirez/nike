import styled from 'styled-components'
import { Container, Button } from '../../containers/Containers.js'

export const ProductInfoContainer = styled(Container)`
  width: 40%;
  flex-direction: column;
  @media (max-width: 800px) {
    margin-top: 40px;
    width: 100%;
  }
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
  border-radius: 100px;
  transition: all 0.1s;
  margin: 5px;
  &:hover {
    border: solid 2px #673ab7;
    cursor: pointer;
  }

  @media (max-width: 830px) {
    padding: 15px;
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
  @media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const FormTitle = styled(ProductTitle)`
  margin: 10px 0 0 0;
`

export const SubmitButton = styled(Button)`
  height: 50px;
  width: 80%;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 50px; 
  }
`
