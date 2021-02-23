import React from 'react'
import { Logo, Cart,Categories, HeaderContainer,Category,CartNumber } from './Header'

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src='https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png'/>
            <Cart src='https://img.icons8.com/windows/64/000000/shopping-cart.png'/>
            <CartNumber>(0)</CartNumber>
            <Categories>
                <Category>RUNNING</Category>
                <Category>TRAINING</Category>
                <Category>FUTBOL</Category>
                <Category>SPORTSWEAR</Category>
                <Category>JORDAN</Category>
            </Categories>
        </HeaderContainer>
    
    )
}
export default Header