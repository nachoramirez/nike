const initalState = {
  products: [],
  cart: [],
  trending: [],
  trendingIsLoading: true,
  productsIsLoading: true,
  currentProductIsLoading: true,
  currentSort: 'Recomended',
}

const initialReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'CALL_CATEGORY':
      return {
        ...state,
        products: action.payload,
        productsIsLoading: false,
        currentSort: 'Recomended',
      }
    case 'CALL_PRODUCT':
      return {
        ...state,
        currentProduct: action.payload,
        currentProductIsLoading: false,
      }
    case 'CALL_TRENDING':
      return {
        ...state,
        trending: action.payload,
        trendingIsLoading: false,
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case 'SET_SIZE':
      return {
        ...state,
        currentProduct: { ...state.currentProduct, size: action.payload },
      }

    case 'SORT_BY_PRICE_UP':
      return {
        ...state,
        products: state.products.sort((a, b) => a.price - b.price),
        currentSort: action.payload,
      }
    case 'SORT_BY_PRICE_DOWN':
      return {
        ...state,
        products: state.products.sort((a, b) => b.price - a.price),
        currentSort: action.payload,
      }
    case 'SORT_BY_NAME_UP':
      return {
        ...state,
        products: state.products.sort((a, b) => (a.name > b.name ? 1 : -1)),
        currentSort: action.payload,
      }
    case 'SORT_BY_NAME_DOWN':
      return {
        ...state,
        products: state.products.sort((a, b) => (a.name > b.name ? -1 : 1)),
        currentSort: action.payload,
      }
    case 'DELETE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.filter((items) => items !== action.payload),
      }
    default:
      return state
  }
}

export default initialReducer
