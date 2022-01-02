import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const AceptedPaymentsContainer = styled(Container)`
  margin-top: 15px;
  height: 42px;

  @media (max-width: 800px) {
    margin: 28px 0;
    height: 120px;
  }
`
export const AceptedPayment = styled.img`
  height: 120%;
  padding-left: 8px;

  @media (max-width: 800px) {
    height: 45%;
  }
`
