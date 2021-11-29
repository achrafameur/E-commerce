
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../actions/productActions'
import Loader from './layout/Loader'
import {Col, Row} from 'react-bootstrap';
import Product from './layout/Product';


const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const auth = useSelector(state => state.auth)
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
            {auth.isAuth}

                <div className='container my-5'>
				<h3> Latest Products : </h3>
                    {loading ? (
                           <Loader />
                    ) : (                                          
                            <div className='card'>
                                <div className='card-body px-2'>
									<Row xs={1} md={2} className="g-4">          
									{products && products.map((el) => (
											<Col key={el._id}  sm={3} md={3} lg={2} xl={3}>
													<Product product={el} />
											</Col>
										)
									)}
									</Row>
								</div>
							</div>
						)}
				</div>
        </>
    )
}

export default Home
