import React from 'react';
import { Card, Button, Col, Row, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useHistory, useLocation } from 'react-router-dom';
//Images
import User from '../../Images/user.png'


const Profile = () => {
    const { user, logOut, setUser, setIsLoading } = useAuth();
    const { displayName, email } = user;
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";

    const handleLogout = () => {
        logOut()
            .then((result) => {
                setUser({})
                Swal.fire(
                    "Good job!",
                    "Log Out SuccessFull!",
                    "success"
                )
                history.push(redirect);
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    "error"
                )
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div>
            <Container>
                <Row md={10}>
                    <Col className="p-5">
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Image className="p-5" src={User} roundedCircle />
                            <Card.Body>
                                <Card.Title>{displayName}</Card.Title>
                                <Card.Text>{email}</Card.Text>
                                <Link><Button onClick={handleLogout} variant="warning">Log Out</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Profile;