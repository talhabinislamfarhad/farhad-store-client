import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const Location = <FontAwesomeIcon icon={faMapMarkedAlt} />
    const Phone = <FontAwesomeIcon icon={faPhone} />
    const Envelope = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <div>
            {/* <!-- footer section --> */}
            <footer className="footer_section">
                <Container>
                    <Row className="justify-content-center mt-5">
                        <Col xs={12} md={6} lg={3}>
                            <div className="footer_detail">
                                <h4>
                                    FarhadStore
                                </h4>
                                <p>
                                    Welcome to farhadStore! This online watch store that you have been looking for. Our goal and mission to help you find and own the perfect watch.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="footer_contact">
                                <h4>
                                    Reach at..
                                </h4>
                                <div className="contact_link_box">
                                    <p>
                                        <span>
                                            {Location} Mirpur 10, Dhaka
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            {Phone} Call +88017-35074448
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            {Envelope} farhadstore@gmail.com
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="footer_contact">
                                <h4>
                                    Quick Links
                                </h4>
                                <div className="contact_link_box">
                                    <Link to="/about">About</Link>
                                    <Link to="/watchs">Watchs</Link>
                                    <Link to="/login">Log In</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="footer_contact">
                                <h4>
                                    Subscribe
                                </h4>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Button>Subscribe</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <div className="footer-info">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By
                            <a href="https://html.design/"> Talhabin Islam</a>
                        </p>
                    </div>
                </Container>
            </footer>
            {/* <!-- footer section --> */}
        </div>
    );
};

export default Footer;