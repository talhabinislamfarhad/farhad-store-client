import React from 'react';
import './Features.css';
// All Images
import featuresOne from '../../../Images/f1.png';
import featuresTwo from '../../../Images/f2.png';
import featuresThree from '../../../Images/f3.png';
import featuresFour from '../../../Images/f4.png';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <div>
            {/* <!-- feature section --> */}

            <section className="feature_section my-5">
                <Container>
                    <div className="heading_container">
                        <h2> Features Of Our Watches</h2>
                    </div>
                    <Row>
                        <Col lg={3} sm={6}>
                            <div className="box m-2">
                                <div className="img-box">
                                    <img src={featuresOne} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Fitness Tracking
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="box m-2">
                                <div className="img-box">
                                    <img src={featuresTwo} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Alerts & Notifications
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="box m-2">
                                <div className="img-box">
                                    <img src={featuresThree} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Messages
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="box m-2">
                                <div className="img-box">
                                    <img src={featuresFour} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Bluetooth
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <!-- end feature section --> */}
        </div>
    );
};

export default Features;