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

import CartIcon from '../../static/Cart.svg'
import NikeIcon from '../../static/NikeLogo.svg'



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
        src={NikeIcon}
      />
      <>
        <Cart
          onClick={() => history.push('/cart')}
          src={CartIcon}
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
