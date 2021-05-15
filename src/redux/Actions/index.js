import axios from 'axios'

const API = 'http://localhost:3000/'

export const CallProduct = (path) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`http://localhost:3000/${path}`)
    dispatch({
        type: 'CALL_PRODUCT',
        payload: res.data,
    })
  } catch (err) {
    console.error(err)
  }
}


export const CallCategoy = (path) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`http://localhost:3000/${path}`)
    dispatch({
        type: 'CALL_CATEGORY',
        payload: res.data,
    })
  } catch (err) {
    console.error(err)
  }
}
