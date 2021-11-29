import axios from 'axios'
import { 
    ADD_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILED,
    GET_PRODUCT_REQUEST,
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
            dispatch({ type:GET_PRODUCT_REQUEST})
           
            // const { data } = await axios.get(`${prefixe}/api/getAllProducts`)
            const { data } = await axios.get(`http://localhost:5000/api/getAllProducts`)
            console.log(data)
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: data.produits
            })   
        }
        catch (err) {
            dispatch({ 
                type: GET_PRODUCT_FAILED,
                payload : err.response
            })
        }
    }
    


