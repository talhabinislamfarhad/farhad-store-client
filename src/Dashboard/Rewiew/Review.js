import React from 'react';
import { Form, Row, Button, Container, Col, Card, FloatingLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('https://secure-coast-01633.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    Swal.fire("WoW!",
                        "Review SuccessFull!",
                        "success"
                    )
                    reset();
                }
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    // ${error.message},
                    "error"
                )
            })
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className="mx-auto mt-5" md={6}>
                        <h3>Add Review!</h3>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <FloatingLabel
                                        controlId="floatingtitle"
                                        label="Name"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text"
                                            {...register("name")}
                                            placeholder="name"
                                            required />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingimg" label="Image URL" className="mb-3">
                                        <Form.Control type="text" {...register("img")} placeholder="img url" required />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingdes" label="Decription" className="mb-3">
                                        <Form.Control type="text" as="textarea" {...register("dsc")} placeholder="des" required />
                                    </FloatingLabel>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <select required {...register("rate")} className="form-control">
                                                <option value="">Select Rating</option>
                                                <option value="1">1</option>
                                                <option value="1.8">1.8</option>
                                                <option value="2">2</option>
                                                <option value="2.7">2.7</option>
                                                <option value="3">3</option>
                                                <option value="3.8">3.8</option>
                                                <option value="4">4</option>
                                                <option value="4.6">4.6</option>
                                                <option value="5">5</option>
                                            </select>
                                        </Form.Group>
                                    </Row>
                                    <Button variant="warning" type="submit">Add</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;