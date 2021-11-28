import axios from 'axios'
import { 
    ADD_PRODUCT_SUCCESS,
    GET_PRODUCT_SUCCESS } from '../constants/productConstants'
import {startLoading,clearError,setError,stopLoading} from './AppStateActions'
import { prefixe } from '../constants/helpers'

    export const addProduct = (newProduct) => async (dispatch) => {
        try {
            dispatch(startLoading("Adding product ..."))
            dispatch(clearError())
            // setToken()
            const { data } = await axios.post(`${prefixe}/api/addProduct`, newProduct)
            dispatch({
                type: ADD_PRODUCT_SUCCESS,
                payload: data
            })
        }
        catch (err) {
            dispatch(stopLoading())
            dispatch(setError(err.response.data.errors))
        }
    }    

    export const getProducts = () => async (dispatch) => {

        try {
            dispatch(startLoading("Get Products"))
            dispatch(clearError())
            const { data } = await axios.get(`${prefixe}/api/getAllProducts`)
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: data
            })
            dispatch(stopLoading())
        }
        catch (err) {
            dispatch(stopLoading())
            dispatch(setError(err.response.data.errors))
        }
    }
    


