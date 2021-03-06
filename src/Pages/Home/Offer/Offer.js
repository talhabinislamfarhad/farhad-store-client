import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Row } from 'react-bootstrap';

import './Offer.css';

const Offer = () => {
    return (
        <div>
            {/* <!-- Offer Area --> */}

            <section className="section free-version-banner p-5">
                <Container>
                    <Row className="align-items-center" md={8} xs={12}>
                        <div className="section-title mb-60">
                            <span className="text-dark wow fadeInDown" data-wow-delay=".2s" >FarhadStore</span>
                            <h2 className="text-dark wow fadeInUp" data-wow-delay=".4s" >GET 50% OFF <br />IN ALL SMART WATCH</h2>
                            <Button variant="danger" className="button">
                                <Link as={NavLink} to="/watchs" className="text-light wow fadeInUp">Purchase Now</Link>
                            </Button>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* <!-- Offer End --> */}
        </div>
    );
};

export default Offer;