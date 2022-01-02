import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const PreCheckoutContainer = styled(Container)`
  flex-direction: column;
  justify-content: flex-start;
  width: 340px;
  height: 340px;
  background-color: #bbbbbb;

  @media (max-width: 800px) {
    align-self: center;
    width: 80%;
  }
`

export const SummaryTittle = styled.h2`
  padding-left: 14px;
`

export const PaymentMethodsTittle = styled.h3`
  padding-left: 4px;
  margin: 20px 0 0 0;
`
