import React from 'react';
import './Contact.css';
import ContactImg from '../../../Images/contact.jpg';
import { Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            {/* <!-- contact section --> */}

            <section className="contact_section my-5">
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <div className="form_container">
                                <div className="heading_container">
                                    <h2>
                                        Contact Us
                                    </h2>
                                </div>
                                <Form>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Full Name"
                                            aria-label="name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Email"
                                            aria-label="email"
                                            aria-describedby="basic-addon2"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Phone number"
                                            aria-label="number"
                                            aria-describedby="basic-addon3"
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <FormControl
                                            className="message-box"
                                            as="textarea"
                                            placeholder="Message"
                                            aria-label="message"
                                            aria-describedby="basic-addon3"
                                        />
                                    </InputGroup>
                                    <div className="d-flex ">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="img-box">
                                <img src={ContactImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <!-- end contact section --> */}
        </div>
    );
};

export default Contact;