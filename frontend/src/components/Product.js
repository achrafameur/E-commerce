import { Table } from "react-bootstrap";
import React from 'react';

export default function Product({ product }) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th >ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  style={{textAlign:'center'}}>
                        <td>id</td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.description}</td>
                        <td>
                            <button class="btn btn-danger">DELETE</button>
                            <button style={{marginLeft:'30px'}} class="btn btn-info">UPDATE</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        );
}