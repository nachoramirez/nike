import React from 'react'
import {
  DropDownContainer,
  ShortBy,
  DropDownOption,
  DropDownContent,
  Ul,
  DropDownLi,
  Dropbtn,
} from './DropDown'

const DropDown = () => {
  return (
    <DropDownContainer>
      <ShortBy>Short by:</ShortBy>
      <Ul>
        <DropDownLi>
          <Dropbtn>Price ↑</Dropbtn>
          <DropDownContent>
            <DropDownOption>Price ↑</DropDownOption>
            <DropDownOption>Price ↓</DropDownOption>
            <DropDownOption>Name ↑</DropDownOption>
            <DropDownOption>Name ↓</DropDownOption>
          </DropDownContent>
        </DropDownLi>
      </Ul>
    </DropDownContainer>
  )
}

export default DropDown
