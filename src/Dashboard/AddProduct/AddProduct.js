import React from 'react';
import './AddProduct.css'
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://secure-coast-01633.herokuapp.com/watchs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    "Good job!",
                    "Package Insert SuccessFull!",
                    "success"
                )
                reset()
                history.push('/watchs');
            })
    };
    return (
        <>
            <Container>
                <Row>
                    <Col className="mx-auto mt-5" md={6}>
                        <h3>Add Product!</h3>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <FloatingLabel
                                        controlId="floatingtitle"
                                        label="Package Title"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="title" {...register("title")} required />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingprice" label="Price" className="mb-3">
                                        <Form.Control type="number" placeholder="price" {...register("price")} required />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingdes" label="Decription" className="mb-3">
                                        <Form.Control type="text" placeholder="des" {...register("description")} required />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingimg" label="Image URL" className="mb-3">
                                        <Form.Control type="text" placeholder="img url" {...register("img")} required />
                                    </FloatingLabel>
                                    <Button variant="warning" type="submit">Add</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddProduct;