import React from 'react'
import { AceptedPaymentsContainer,AceptedPayment } from './AceptedPayments'

import AmericanExpress from '../../static/AmericanExpress.svg'
import MasterCard from '../../static/Mastercard.svg'
import MercadoPago from '../../static/MercadoPago.svg'
import Visa from '../../static/Visa.svg'
import Paypal from '../../static/PayPal.svg'


const AceptedPayments = () => {

  const AceptedPaymentsImages = [
    Visa,
    MasterCard,
    MercadoPago,
    Paypal,
    AmericanExpress,
  ]

  return (
      <AceptedPaymentsContainer>
         {AceptedPaymentsImages.map((item, key) =><AceptedPayment src={item} key={key}/> )}
      </AceptedPaymentsContainer>
  )
}


export default AceptedPayments
