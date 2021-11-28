import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListeProduits from './ListeProduits' 
import {getProducts} from '../actions/productActions'

const AdminHome = () => {
    const productList = useSelector(state => state.productList)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(getPostCount())
        dispatch(getProducts())
    }, [])
    
    const handlePageChange = () => {
        dispatch(getProducts())
    }
    
    return (
        <>
            {auth.isAuth }
            <ListeProduits onChange={handlePageChange} productList={productList}></ListeProduits>
        </>
    )
}

export default AdminHome