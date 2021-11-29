import { Card,Button} from "react-bootstrap";
import React from 'react';

export default function Product({ product }) {
    return (
        <div>
            {/* style={{height:'470px'}}
            style={{height:'170px'}} 
            style={{marginLeft:'30px'}}*/}
            <Card className='my-1 p-2 rounded' >
                <div className='card' >
                    {/* <Link> */}
                        <Card.Img variant='top' src='https://www.camerasurveillance.net/38-thickbox_default/camera-surveillance-ir-longue-portee.jpg'/>
                    {/* </Link> */}
                </div>
                <Card.Body>
                        <Card.Title>
                            <strong>  Name :</strong> {product.name}
                        </Card.Title>
                        <Card.Text as='div'>
                            <strong>  Description :</strong><br/> {product.description}
                        </Card.Text>
                        <Card.Text as='div'>
                            <strong>  Quantity :</strong> {product.quantity} 
                        </Card.Text>
                        <Card.Text as='div'><strong>  Price:</strong> {product.price} DNT</Card.Text>
                        
                </Card.Body>
                <Card.Footer style={{alignItems:'center'}}>
                    <Button variant="secondary" href='/about' >Go To Product Details </Button>
                </Card.Footer>
            </Card>
            </div>
        );
}