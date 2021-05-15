

const initialReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CALL_CATEGORY':
            return {
                ...state,
                products: action.payload
            }
        case 'CALL_PRODUCT': 
            return {
                ...state,
                currentProduct: action.payload
            }
        default:
            return state
    }
}

export default initialReducer