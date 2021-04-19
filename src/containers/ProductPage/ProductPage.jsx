import React from 'react'
import { ProductPageContainer} from './ProductPage.js'

import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel.jsx'
import ProductInfo from '../../components/ProductInfo/ProductInfo.jsx'

const ProductPage = () => {
 return(
    <ProductPageContainer>
       <ProductCarrousel/>
       <ProductInfo />
         
    </ProductPageContainer>
 ) 
}

export default ProductPage