import React from 'react'
import { useLocation } from 'react-router-dom'
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
  const Location = useLocation(useLocation)

  const CategoriesList = [
    { name: 'RUNNING', path: '/running' },
    { name: 'TRAINING', path: '/training' },
    { name: 'FUTBOL', path: '/futbol' },
    { name: 'SPORTSWEAR', path: '/sportswear' },
    { name: 'JORDAN', path: '/jordan' },
  ]

  return (
    <HeaderContainer>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <Logo src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" />
      </Link>
      <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <Cart src="https://img.icons8.com/windows/64/000000/shopping-cart.png" />
        <CartNumber>(0)</CartNumber>
      </Link>
      <Categories>
        {CategoriesList.map(({ path, name }, key) => {
          const currentPath = Location.pathname

          return (
            <Link
              key={key}
              to={path}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <Category selected={currentPath === path}>{name}</Category>
            </Link>
          )
        })}
      </Categories>
    </HeaderContainer>
  )
}
export default Header
