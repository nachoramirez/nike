import styled from 'styled-components'
import { Container } from '../Containers.js'

export const CartPageContainer = styled(Container)`

  justify-self: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
