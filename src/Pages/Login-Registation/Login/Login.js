import React from 'react';
import './Login.css'
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const emailRedirect = location?.state?.from || "/dashboard";
    const googleRedirect = location?.state?.from || "/dashboard";
    const { getEmail, getPassword, signInWithEmail, setUser, signinGoogle, setIsLoading, saveUser } = useAuth();
    const login = (e) => {
        e.preventDefault()
        signInWithEmail()
            .then((result) => {
                console.log(result);
                setUser(result.user)
                Swal.fire(
                    "Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(emailRedirect);
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const handleGoogleLogin = () => {
        signinGoogle()
            .then(result => {
                saveUser(result.user.email, result.user.displayName, 'PUT')
                console.log(result)
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
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
            <div className="login my-5">
                <h1 className="mt-5 text-warning">LOG IN</h1>
                <Container>
                    <Row className="justify-content-center mt-5">
                        <Col xs={10} md={6}>
                            <Form onSubmit={login}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control onBlur={getEmail} type="email" placeholder="name@example.com" required />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" required />
                                </FloatingLabel>
                                <Button type="submit" variant="warning" className="text-dark my-4">Log In</Button><br />
                                <Link to="/registation" className="text-dark my-5">Not a member? Click for <span className="text-dark bg-warning">SING UP</span></Link>
                                <h2 className="mt-2 text-warning">------- OR -------</h2>
                                <div>
                                    <Button className="mt-2 bg-warning border-0 text-dark" onClick={handleGoogleLogin}>{Google}</Button>
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

export default Login;