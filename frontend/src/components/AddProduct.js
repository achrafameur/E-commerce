import React, { useState } from 'react';
import { Button , Form , Row , Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';
import Compressor from 'compressorjs'

const AddProduct = () => {
    const [product, setProduct] = useState({
        name :'',
        quantity:'0',
        description:'',
        price:'0'
    })

	const [image, setImage] = useState('')
    // const { name, quantity, description,price } = product

    const handleImageChange = (e) => {
        if (e.target.files.length) {
            const myImage = e.target.files[0]
            new Compressor(myImage, {
                quality: 0.8,
                success(result) {
                    const reader = new FileReader()
                    reader.readAsDataURL(result)
                    reader.onloadend = () => {
                        setImage(reader.result)
                        setProduct({ image: reader.result })
                    }

                }
            })
        }
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct(product))
    }

	return (
        <div style={{marginTop:'20px'}}>
            <h1 style={{textAlign:'center'}}> Product Addition Form </h1>
            <Form style={{marginTop:'40px',width:'70%',margin:'auto'}} encType='multipart/form-data' onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name :</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" onChange={(e) => setProduct({ ...product, name: e.target.value })}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Quantity :</Form.Label>
                        <Form.Control type="number" placeholder="Enter Quantity"  onChange={(e) => setProduct({ ...product, quantity: e.target.value })} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Enter description here ..." onChange={(e) => setProduct({ ...product, description: e.target.value })}/>
                    </Form.Group>

                    <Row className="mb-3">
                        {image && <img name="preview" style={{ height: "200px" }} src={image || "../images/260437253_2878733355751857_2366329570976393831_n.png"} alt="preview"></img>}
                        <Form.Group as={Col} >
                        <Form.Label>Image :</Form.Label>
                        <Form.Control type="file" placeholder="Select Image Product" onChange={handleImageChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Price :</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" onChange={(e) => setProduct({ ...product, price: e.target.value })}/>
                        </Form.Group>
                    </Row>


                    <Button variant="secondary" type="submit" style={{width:'150px'}}>
                        Submit
                    </Button>
                </Form>
        </div>
    )}
export default AddProduct