import React from 'react';
import { Form, Row, Button, Container, Col, Card, FloatingLabel } from 'react-bootstrap';

const Review = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="mx-auto mt-5" md={6}>
                        <h3>Add Review!</h3>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <FloatingLabel
                                        controlId="floatingtitle"
                                        label="Name"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="name" required />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingimg" label="Image URL" className="mb-3">
                                        <Form.Control type="text" placeholder="img url" required />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingdes" label="Decription" className="mb-3">
                                        <Form.Control type="text" as="textarea" placeholder="des" required />
                                    </FloatingLabel>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <select required className="form-control">
                                                <option >Select Rating</option>
                                                <option value="1">1</option>
                                                <option value="1.5">1.5</option>
                                                <option value="2">2</option>
                                                <option value="2.5">2.5</option>
                                                <option value="3">3</option>
                                                <option value="3.5">3.5</option>
                                                <option value="4">4</option>
                                                <option value="4.5">4.5</option>
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