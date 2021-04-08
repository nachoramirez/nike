import React from 'react'
import { SummaryContainer, SummaryDetails, SummaryTotal } from './Summary'

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryDetails>
        <p>1 PRODUCT</p>
      </SummaryDetails>
      <SummaryDetails>
        <p>Product total</p>
        <p>$800.00</p>
      </SummaryDetails>
      <SummaryDetails>
        <p>Delivery</p>
        <p>$50.00</p>
      </SummaryDetails>
      <SummaryTotal>
        <p>TOTAL</p>
        <p>$50.00</p>
      </SummaryTotal>
    </SummaryContainer>
  )
}

export default Summary
