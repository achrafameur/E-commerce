import React from 'react'
import Product from './Product';

const ListeProduits = ({prodlist}) => {
	return (
        <div >
             {prodlist.length && prodlist.map( (product, index) => <Product key={index} product={product}></Product>).reverse()}
        </div>
    )}
export default ListeProduits