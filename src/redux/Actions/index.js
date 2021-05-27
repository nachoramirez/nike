import axios from 'axios'

const API = 'http://localhost:3000/'

export const callProduct = (path) => async (dispatch, getState) => {
  try {
    const res = await axios.get(API+path)
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
    const res = await axios.get(API+path)

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
    const res = await axios.get(API+path)

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
