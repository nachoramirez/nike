import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const SummaryContainer = styled(Container)`
  align-self: center;
  width: 90%;
  height: 260px;
  background-color: #E5E5E5;
  flex-direction: column;
  justify-content: start;

`

export const SummaryDetails = styled.div`
    padding: 12px 5px 0px 5px ;
    display: flex;
    justify-content: space-between;
    border-bottom: solid #AAAAAA 1px;
    margin: 0px 8px;
`

export const SummaryTotal = styled.div`
    padding: 12px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`