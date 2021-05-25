import React, { useEffect } from 'react'
import { ProductPageContainer } from './ProductPage.js'
import { useHistory } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { callProduct } from '../../redux/Actions/index'
import Loading from '../../components/Loading/Loading.jsx'

import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel.jsx'
import ProductInfo from '../../components/ProductInfo/ProductInfo.jsx'

const ProductPage = () => {
  const history = useHistory()
  const productId = history.location.pathname.substring(1)

  const dispatch = useDispatch()
  const data = useSelector((store) => store.initialReducer.currentProduct)
  const isLoading = useSelector(
    (store) => store.initialReducer.currentProductIsLoading
  )

  useEffect(() => {
    dispatch(callProduct(productId))
  }, [productId])

  return isLoading ? (
    <Loading />
  ) : (
    <ProductPageContainer>
      <ProductCarrousel data={data.images} />
      <ProductInfo data={data} />
    </ProductPageContainer>
  )
}

export default ProductPage
