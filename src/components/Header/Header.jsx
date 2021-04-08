import React from 'react'
import {
  Logo,
  Cart,
  Categories,
  HeaderContainer,
  Category,
  CartNumber,
} from './Header'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderContainer>
      <Link
        to="/"
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        <Logo src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" />
      </Link>
      <Link
        to="/cart"
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        <Cart src="https://img.icons8.com/windows/64/000000/shopping-cart.png" />
        <CartNumber>(0)</CartNumber>
      </Link>
      <Categories>
        <Link
          to="/running"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <Category>RUNNING</Category>
        </Link>
        <Link
          to="/training"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <Category>TRAINING</Category>
        </Link>
        <Link
          to="/futbol"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <Category>FUTBOL</Category>
        </Link>
        <Link
          to="/sportswear"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <Category>SPORTSWEAR</Category>
        </Link>
        <Link
          to="/jordan"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <Category>JORDAN</Category>
        </Link>
      </Categories>
    </HeaderContainer>
  )
}
export default Header
