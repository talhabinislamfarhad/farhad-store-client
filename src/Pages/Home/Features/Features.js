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
                        <h2 className="my-5"> Features Of Our Watches</h2>
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
                                        A wrist-worn device that can detect some combination of walking steps, running distance, heart rate, sleep patterns and swimming laps.
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
                                        Alert messaging (or alert notification) is machine-to-person communication that is important or time sensitive. An alert may in calendar.
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
                                        The definition of a message is a short communication sent from one person to another or the central theme or idea of a communication.
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
                                        Bluetooth is a short-range wireless technology standard that is used for exchanging data between fixed mobile devices short distances.
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