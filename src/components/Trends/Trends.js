import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const TrendsContainer = styled(Container)`
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
`

export const TrendsShoesContainer = styled(Container)`
  width: 65%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`
