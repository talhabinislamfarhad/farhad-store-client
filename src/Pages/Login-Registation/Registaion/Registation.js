import React, { useEffect } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Registation = () => {
    useEffect(() => {
        document.title = 'Register : Your Best Watch Shop'
    }, []);
    const { signinGoogle, getName, singUp, getEmail, getPassword, setDisplayName, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const googleRedirect = location?.state?.from || "/";
    const register = (e) => {
        e.preventDefault();
        singUp()
            .then((result) => {
                console.log(result);
                setDisplayName()
                Swal.fire(
                    "Good job!",
                    "Account has been created SuccessFull!",
                    "success"
                )
                setTimeout(() => {
                    history.push(redirect);
                }, 1000)
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const handleGoogleReg = () => {
        signinGoogle()
            .then(result => {
                console.log(result)
                Swal.fire("Good job!",
                    "Registation SuccessFull!",
                    "success"
                )
                history.push(googleRedirect);

            }).finally(() => setIsLoading(false))
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }

    const Google = <FontAwesomeIcon icon={faGoogle} />

    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div className="registation my-5">
                <h1 className="mt-5 text-warning">Registation</h1>
                <Container>
                    <Row className="justify-content-center mt-5">
                        <Col xs={10} md={6}>
                            <Form onSubmit={register}>
                                <FloatingLabel controlId="floatingText" label="Your Name" className="mb-3">
                                    <Form.Control onBlur={getName} type="text" placeholder="Talhabin Islam" required />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control onBlur={getEmail} type="email" placeholder="name@example.com" required />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" required />
                                </FloatingLabel>

                                {/* <FloatingLabel controlId="floatingImg" label="Image URL">
                                    <Form.Control onBlur={getImg} type="text" placeholder="Image URL" />
                                </FloatingLabel> */}

                                <Button variant="warning" type="submit" className="text-dark mt-4">Sign up</Button><br />
                                <Link to="/login" className="text-dark mt-4">Alrady a member? Click for Log In</Link>
                                <h2 className="mt-2 text-warning">------- OR -------</h2>
                                <div>
                                    <Button className="mt-2 bg-warning border-0 text-dark" onClick={handleGoogleReg}>{Google}</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Registation;