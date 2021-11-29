
const { GET_PRODUCT_SUCCESS,GET_PRODUCT_COUNT_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_FAILED } = require("../constants/productConstants");

const initState = {
    products: [],
    loading: true,
    count: 0
}

export const AllproductReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,

            }
        case GET_PRODUCT_COUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                count: action.payload.count,
            }
        case GET_PRODUCT_FAILED:
            return{
                ...state,
                loading: false,
                error : action.payload
            }
        default:
            return state 
    }
}

export default AllproductReducer 