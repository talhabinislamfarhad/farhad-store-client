import React from 'react';
import './Banner.css';
import banner from '../../../Images/banner.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            {/* <!-- Banner section --> */}
            <section className="banner_section ">
                <div id="banner">
                    <Container>
                        <Row className="justify-content-center mt-5">
                            <Col xs={12} md={6}>
                                <div className="detail-box">
                                    <h1>
                                        Smart Watches
                                    </h1>
                                    <p>
                                        Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                                    </p>
                                    <div className="btn-box">
                                        <Link to="/watchs" className="btn1"> Our Watchs </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="img-box">
                                    <img src={banner} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>
            {/* <!-- end Banner section --> */}
        </div>
    );
};

export default Banner;