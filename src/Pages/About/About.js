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
                                    Welcome to FarhadStore! We are the online watch store that you have been looking for. Our goal and mission here at FarhadStore is to help you find and own the perfect luxury watch. Have you been thinking of purchasing a Rolex, Omega, Tag Heuer or Seiko?
                                </p>
                                <p>
                                    Whether it will be your very first luxury watch or you’re adding to your elite collection - we offer 100% authentic luxury watches at unbelievably discounted rates. Between our prices and our authenticity guarantee, we believe that we are the best online watch store around.
                                </p>
                                <Link to="/watchs">Shop Now</Link>
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