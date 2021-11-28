
const { GET_PRODUCT_SUCCESS,GET_PRODUCT_COUNT_SUCCESS } = require("../constants/productConstants");

const initState = {
    productList: [],
    errors: null,
    isLoading: false,
    count: 0
}

const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                productList: payload,

            }
        case GET_PRODUCT_COUNT_SUCCESS:
            return {
                ...state,
                count: payload.count,
            }
        default:
            return {
                ...state,
                error: action.payload.error,
            }
    }
}

export default productReducer 