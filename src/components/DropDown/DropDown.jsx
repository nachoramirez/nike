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

import { useSelector, useDispatch } from 'react-redux'

import {
  sortByPriceUp,
  sortByPriceDown,
  sortByNameUp,
  sortByNameDown,
} from '../../redux/Actions/index'

const DropDown = () => {
  const dispatch = useDispatch()

  const currentSort = useSelector(store => store.initialReducer.currentSort)
  return (
    <DropDownContainer>
      <ShortBy>Short by:</ShortBy>
      <Ul>
        <DropDownLi>
          <Dropbtn>{currentSort === undefined ? '' : currentSort }</Dropbtn>
          <DropDownContent>
            <DropDownOption onClick={() => dispatch(sortByPriceUp('Price ↑'))}>
              Price ↑
            </DropDownOption>
            <DropDownOption onClick={() => dispatch(sortByPriceDown('Price ↓'))}>
              Price ↓
            </DropDownOption>
            <DropDownOption onClick={() => dispatch(sortByNameUp('Name ↑'))}>
              Name ↑
            </DropDownOption>
            <DropDownOption onClick={() => dispatch(sortByNameDown('Name ↓'))}>
              Name ↓
            </DropDownOption>
          </DropDownContent>
        </DropDownLi>
      </Ul>
    </DropDownContainer>
  )
}

export default DropDown
