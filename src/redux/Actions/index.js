import axios from 'axios'

const API1 = 'https://60ac7d2f9e2d6b00174574ae.mockapi.io/'
const API2 = 'https://60ad79f880a61f0017331097.mockapi.io/'

export const callProduct = (path) => async (dispatch, getState) => {
  try {
    if (path.substring(5,12) === 'basquet') {
      var res = await axios.get(API2 + path.substring(5))
    } else {
      var res = await axios.get(API1 + path.substring(5))
    }

    dispatch({
      type: 'CALL_PRODUCT',
      payload: res.data,
    })
  } catch (err) {
    console.error(err)
  }
}

export const CallTrendings = (path) => async (dispatch, getState) => {
  try {
    const res = await axios.get(API2 + path)

    dispatch({
      type: 'CALL_TRENDING',
      payload: res.data,
    })
  } catch (err) {
    console.error(err)
  }
}

export const callCategoy = (path) => async (dispatch, getState) => {
  try {
    if (path != 'basquet') {
      var res = await axios.get(API1 + path)
    } else {
      var res = await axios.get(API2 + path)
    }

    dispatch({
      type: 'CALL_CATEGORY',
      payload: res.data,
    })
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: item,
  })
}

export const setSize = (size) => (dispatch) => {
  dispatch({
    type: 'SET_SIZE',
    payload: size,
  })
}

export const sortByNameUp = (property) => (dispatch) => {
  dispatch({
    type: 'SORT_BY_NAME_UP',
    payload: property,
  })
}

export const sortByNameDown = (property) => (dispatch) => {
  dispatch({
    type: 'SORT_BY_NAME_DOWN',
    payload: property,
  })
}

export const sortByPriceUp = (property) => (dispatch) => {
  dispatch({
    type: 'SORT_BY_PRICE_UP',
    payload: property,
  })
}

export const sortByPriceDown = (property) => (dispatch) => {
  dispatch({
    type: 'SORT_BY_PRICE_DOWN',
    payload: property,
  })
}

export const deleteCartItem = (item) => (dispatch) => {
  console.log(item)
  dispatch({
    type: 'DELETE_CART_ITEM',
    payload: item,
  })
}
