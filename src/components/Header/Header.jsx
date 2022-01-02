import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import {
  Logo,
  Cart,
  Categories,
  HeaderContainer,
  Category,
  CartNumber,
  NavBar,
  NavBtn,
} from './Header'

import { useSelector } from 'react-redux'

import CartIcon from '../../static/Cart.svg'
import NikeIcon from '../../static/NikeLogo.svg'
import Menu from '../../static/Menu.svg'
import Close from '../../static/Close.svg'

const Header = () => {
  const width = window.innerWidth
  const location = useLocation(useLocation)
  const history = useHistory()
  const cart = useSelector((store) => store.initialReducer.cart)

  const [isOpen, setIsOpen] = useState(false)

  const CategoriesList = [
    { name: 'RUNNING', path: '/nike/running' },
    { name: 'TRAINING', path: '/nike/training' },
    { name: 'FUTBOL', path: '/nike/futbol' },
    { name: 'SPORTSWEAR', path: '/nike/sportswear' },
    { name: 'BASQUET', path: '/nike/basquet' },
  ]

  return (
    <HeaderContainer>
      <Logo onClick={() => history.push('/nike')} src={NikeIcon} />
      <>
        <Cart onClick={() => history.push('/nike/cart')} src={CartIcon} />
        <CartNumber onClick={() => history.push('/nike/cart')}>
          ({cart.length})
        </CartNumber>
      </>
      <NavBtn isOpen={isOpen} src={isOpen ? Close : Menu} onClick={() => setIsOpen(!isOpen)} />
      <Categories isOpen={isOpen}>
        <NavBar>
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
        </NavBar>
      </Categories>
    </HeaderContainer>
  )
}
export default Header
