import React from 'react'

import ShoeCollection from '../../components/ShoeCollection/ShoeCollection.jsx'
import DropDown from '../../components/DropDown/DropDown.jsx'

import {CollectionContainer} from './Collections'

const Collections = ({location}) => {
  const Category = location.pathname
  return (
    <CollectionContainer>
        <DropDown />
        <ShoeCollection Category={Category} />
    </CollectionContainer>
  )
}

export default Collections
