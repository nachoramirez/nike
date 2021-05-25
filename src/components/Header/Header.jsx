import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import {
  Logo,
  Cart,
  Categories,
  HeaderContainer,
  Category,
  CartNumber,
} from './Header'



import { useSelector } from 'react-redux'

const Header = () => {
  const location = useLocation(useLocation)
  const history = useHistory()
  const cart = useSelector((store) => store.initialReducer.cart)

  const CategoriesList = [
    { name: 'RUNNING', path: '/running' },
    { name: 'TRAINING', path: '/training' },
    { name: 'FUTBOL', path: '/futbol' },
    { name: 'SPORTSWEAR', path: '/sportswear' },
    { name: 'BASQUET', path: '/basquet' },
  ]

  return (
    <HeaderContainer>
      <Logo
        onClick={() => history.push('')}
        src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
      />
      <>
        <Cart
          onClick={() => history.push('/cart')}
          src="https://img.icons8.com/windows/64/000000/shopping-cart.png"
        />
        <CartNumber onClick={() => history.push('/cart')}>
          ({cart.length})
        </CartNumber>
      </>
      <Categories>
        {CategoriesList.map(({ path, name }, id) => {
          const currentPath = location.pathname

          return (
            <Category
              key={id}
              onClick={() => history.push(path)}
              selected={currentPath === path}
            >
              {name}
            </Category>
          )
        })}
      </Categories>
    </HeaderContainer>
  )
}
export default Header
