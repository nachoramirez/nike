import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'


export const ShoeCollectionContainer = styled(Container)`
  width: 65%;
  padding: 30px 0px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  @media (max-width: 820px){
    width: 100%;
    margin: 80px 0;
  }
`

export const CollectionCategory = styled.h1`
  position: absolute;
  padding-top: 20px;
  left: 50px;

  @media (max-width: 820px) {
    display: none;
  }
`

export const CollectionResults = styled.p`
  position: absolute;
  padding-top: 80px;
  left: 50px;
  @media (max-width: 820px) {
    left:50%;
    transform: translateX(-50%) ;
    padding-top: 0px;
    font-size: 20px;
  }
`
