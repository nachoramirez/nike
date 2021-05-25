import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'


export const ShoeCollectionContainer = styled(Container)`
  width: 65%;
  padding: 30px 0px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`

export const CollectionCategory = styled.h1`
  position: absolute;
  padding-top: 20px;
  left: 50px;
`

export const CollectionResults = styled.p`
  position: absolute;
  padding-top: 80px;
  left: 50px;
`
