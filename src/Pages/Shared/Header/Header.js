import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut, setUser, setIsLoading } = useAuth();
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

    const User = <FontAwesomeIcon icon={faUser} />

    return (
        <div>
            <Navbar bg="light" expand="lg" className="header_section">
                <Container>
                    <Nav.Link as={NavLink} to="/">
                        <Navbar.Brand className="navbar-brand">FarhadStore</Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar navbar-expand-lg custom_nav-container">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/watchs">Watchs</Nav.Link>
                            {!user?.displayName ? (<Nav.Link className="m-2 p-0" as={NavLink} to="/login">
                                <Button variant="outline-warning" className="text-dark">Log In</Button>
                            </Nav.Link>)
                                :
                                <>
                                    <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                                    <NavDropdown title={User} id="basic-nav-dropdown">
                                        <Navbar.Brand>{user?.displayName}</Navbar.Brand> <br />
                                        <Button onClick={handleLogout} variant="outline-warning" className="text-dark">Log Out</Button>
                                    </NavDropdown>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;