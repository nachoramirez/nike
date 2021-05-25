import React from 'react'
import { SummaryContainer, SummaryDetails, SummaryTotal } from './Summary'
import { useSelector } from 'react-redux'

const Summary = () => {
  const data = useSelector((store) => store.initialReducer.cart)
  let total = 0
  const delivery = 350

  data.map((item) => (total += parseInt(item.price)))
  return (
    <SummaryContainer>
      <SummaryDetails>
        <p>{data.length} PRODUCT</p>
      </SummaryDetails>
      <SummaryDetails>
        <p>Product total</p>
        <p>${data.length === 0 ? 0 : total}</p>
      </SummaryDetails>
      <SummaryDetails>
        <p>Delivery</p>
        <p>${delivery}</p>
      </SummaryDetails>
      <SummaryTotal>
        <p>TOTAL</p>
        <p>${total + delivery}</p>
      </SummaryTotal>
    </SummaryContainer>
  )
}

export default Summary
