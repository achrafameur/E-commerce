import React from 'react'
import { Button , Form , Row , Col } from 'react-bootstrap';
const SendDevis = () => {
	return (
        <div style={{marginTop:'20px'}}>
            <h1 style={{textAlign:'center'}}> Sending Form </h1>
            <Form style={{marginTop:'40px',width:'70%',margin:'auto'}}>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Image :</Form.Label>
                        <Form.Control type="file" placeholder="Select Image Product" />
                        </Form.Group>
                    </Row>

                    <Button variant="secondary" type="submit" style={{width:'150px'}}>
                        Send 
                    </Button>
                </Form>
        </div>
    )}
export default SendDevis