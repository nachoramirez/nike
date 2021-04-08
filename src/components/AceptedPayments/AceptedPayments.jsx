import React from 'react'
import { AceptedPaymentsContainer,AceptedPayment } from './AceptedPayments'

const AceptedPayments = () => {
  return (
      <AceptedPaymentsContainer>
          <AceptedPayment src='http://assets.stickpng.com/thumbs/58482363cef1014c0b5e49c1.png'/>
          <AceptedPayment src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png' />
          <AceptedPayment src='https://www.institutobass.com/institutobass/wp-content/uploads/2017/04/Mercadopago-logo-1.png'/>
          <AceptedPayment src='https://1000marcas.net/wp-content/uploads/2019/12/PayPal-Logo.png'/>
          <AceptedPayment src='https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg'/>
      </AceptedPaymentsContainer>
  )
}


export default AceptedPayments
