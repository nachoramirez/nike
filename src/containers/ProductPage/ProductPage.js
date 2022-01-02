import styled from 'styled-components'
import { Container } from '../Containers.js'

export const ProductPageContainer = styled(Container)`
  justify-self: center;
  justify-content: space-around;
  width: 85%;
  padding-left: 7.5%;

  @media (max-width: 800px) {
    margin-top: 40px;
    flex-direction: column;
  }
`

