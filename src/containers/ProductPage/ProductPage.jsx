import React, { useEffect } from 'react'
import { ProductPageContainer } from './ProductPage.js'
import { useHistory } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { CallProduct } from '../../redux/Actions/index'
import Loading from '../../components/Loading/Loading.jsx'

import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel.jsx'
import ProductInfo from '../../components/ProductInfo/ProductInfo.jsx'

const ProductPage = () => {
  const history = useHistory()
  const path = history.location.pathname.substring(1)

  const dispatch = useDispatch()
  const data = useSelector((store) => store.initialReducer.currentProduct)

  useEffect(() => {
    dispatch(CallProduct(path))
  }, [path])

  console.log(data)

  return ( data === undefined  ? <Loading /> : 
    <ProductPageContainer>
      <ProductCarrousel data={data.images}/>
      <ProductInfo data={data}/>
    </ProductPageContainer>
  )
}

export default ProductPage
