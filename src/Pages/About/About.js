import React from 'react';
import './About.css';
import about from '../../Images/about.png';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Features from '../Home/Features/Features';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            {/* <!-- about section --> */}
            <section className="about_section layout_padding p-5">
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={5}>
                            <div className="img-box">
                                <img src={about} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={7}>
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Us
                                    </h2>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                    the middle of text. All
                                </p>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                    the middle of text. All
                                </p>
                                <Link to="/about">Read More</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <!-- end about section --> */}
            <Features></Features>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;