import React from 'react';
import './Brand.css';
// All Images
import BrandOne from '../../../Images/brand-1.jpg';
import BrandTwo from '../../../Images/brand-2.jpg';
import BrandThree from '../../../Images/brand-3.jpg';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Brand = () => {
    return (
        <div>
            {/* <!-- about --> */}
            <Row className="pb-5 mt-5">
                <Col sm={4} className="my-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src={BrandOne} alt="" />
                        <div className="overlay">
                            <h5>Gocomma A6</h5>
                            <Link className="info" as={NavLink} to="/watchs" >Shop Now</Link>
                        </div>
                    </div>
                </Col>
                <Col sm={4} className="my-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src={BrandTwo} alt="" />
                        <div className="overlay">
                            <h5>ECG SmartWatch</h5>
                            <Link className="info" as={NavLink} to="/watchs" >Shop Now</Link>
                        </div>
                    </div>
                </Col>
                <Col sm={4} className="my-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src={BrandThree} alt="" />
                        <div className="overlay">
                            <h5>Microwear H8</h5>
                            <Link className="info" as={NavLink} to="/watchs" >Shop Now</Link>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <!-- //about --> */}
        </div >
    );
};

export default Brand;