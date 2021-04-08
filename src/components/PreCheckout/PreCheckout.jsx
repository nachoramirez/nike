import React from 'react'
import { PreCheckoutContainer,SummaryTittle, PaymentMethodsTittle } from './PreCheckout'

import Summary from '../Summary/Summary.jsx'
import AceptedPayments from '../AceptedPayments/AceptedPayments.jsx'

const PreCheckout = () => {
    return (
        <PreCheckoutContainer>
            <SummaryTittle> ORDER SUMMARY : </SummaryTittle>
            <Summary/>
            <PaymentMethodsTittle> ACEPTED PAYMENTS METHODS : </PaymentMethodsTittle>
            <AceptedPayments/>
        </PreCheckoutContainer>
    )
}

export default PreCheckout