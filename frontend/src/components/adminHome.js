import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../actions/productActions'
import Loader from './layout/Loader'
import { Table } from 'react-bootstrap';


const AdminHome = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    // const auth = useSelector(state => state.auth)
    const { loading, products } = productList

    useEffect(() => {
        // dispatch(getPostCount())
        dispatch(getProducts())
    }, [dispatch])

    console.log(products)
    
    // const handlePageChange = () => {
    //     dispatch(getProducts())
    // }
    
    return (
        <>
            {/* {auth.isAuth }
            <ListeProduits productList={productList}></ListeProduits> */}
                <div className='container my-5'>
                    {loading ? (
                           <Loader />
                    ) : (                                          
                        <div>
                        <div>
                                   
						{products && products.map((el) => (
							<>
                                 <Table striped bordered hover>
                                        <thead>
                                            <tr style={{textAlign:'center'}}>
                                                <th>Product Name</th>
                                                <th>Description</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{textAlign:'center'}}>
                                                <td>{el.name}</td>
                                                <td>{el.description}</td>
                                                <td>{el.quantity}</td>
                                                <td>{el.price}</td>
                                                <td>
                                                    <button  className="btn btn-danger">Delete</button>
                                                    <button className="btn btn-info" style={{marginLeft:'30px'}}>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
							</>
						))}
					</div>
				</div>
			)}
		</div>
        </>
    )
}

export default AdminHome