import styled, { keyframes } from 'styled-components'
import { Container } from '../../containers/Containers.js'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
    border: 16px solid #AE88F5; 
    border-top: 16px solid #673ab7; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${rotate} 2s linear infinite;

  `

export const LoadingContainer = styled(Container)`
    height: 100vh;
`