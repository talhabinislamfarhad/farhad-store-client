import React from 'react';
import { Container } from 'react-bootstrap';
// Image
import notFound from '../../Images/404.jpg';
// CSS
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Container className="my-5">
                <img
                    src={notFound}
                    width="90%"
                    className="d-inline-block align-top"
                    alt="learn-point-logo"
                />
                <Link to="/">
                    <Button className="my-4" variant="warning">BACK TO HOME</Button>
                </Link>
            </Container>
        </div>
    );
};

export default NotFound;