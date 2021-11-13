import React from 'react';
import './Services.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faGift, faLock, faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    const Sync = <FontAwesomeIcon icon={faSync} />
    const Gift = <FontAwesomeIcon icon={faGift} />
    const Lock = <FontAwesomeIcon icon={faLock} />
    const Shipping = <FontAwesomeIcon icon={faShippingFast} />

    return (
        <div>
            {/* <!--services--> */}
            <div className="services mt-3" id="services">
                <Container fluid className="p-0">
                    <Row className="services-row mt-5">
                        <Col className="services-grids p-sm-5 p-3 my-2" lg={3} md={3} sm={6}>
                            <span className="p-4">{Sync}</span>
                            <h4 className="mt-2 mb-3">30 days replacement</h4>
                        </Col>
                        <Col className="services-grids p-sm-5 p-3  my-2" lg={3} md={3} sm={6}>
                            <span className="p-4">{Gift}</span>
                            <h4 className="mt-2 mb-3">Gift Card</h4>
                        </Col>
                        <Col className="services-grids p-sm-5 p-3  my-2" lg={3} md={3} sm={6}>
                            <span className="p-4">{Lock}</span>
                            <h4 className="mt-2 mb-3">secure payments</h4>
                        </Col>
                        <Col className="services-grids p-sm-5 p-3  my-2" lg={3} md={3} sm={6}>
                            <span className="p-4">{Shipping}</span>
                            <h4 className="mt-2 mb-3">free shipping</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <!-- //services--> */}
        </div>
    );
};

export default Services;