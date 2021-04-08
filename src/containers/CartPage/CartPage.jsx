import React from 'react'
import { CartPageContainer } from './CartPage'
import Cart from '../../components/Cart/Cart.jsx'
import PreCheckout from '../../components/PreCheckout/PreCheckout.jsx'

const CartPage = ({history}) => {
    return (
        <CartPageContainer>
            <Cart history={history}/>
            <PreCheckout />
        </CartPageContainer>
    )
}

export default CartPage