import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import payImg from '../../Images/404.jpg'

const PayBill = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="mx-auto mt-5" md={6}>
                        <h3>Comming Soon</h3>
                        <img
                            src={payImg}
                            width="100%"
                            className="d-inline-block align-top"
                            alt="learn-point-logo"
                        />
                        <Link to="/dashboard">
                            <Button className="my-5" variant="warning"> GO BACK </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PayBill;