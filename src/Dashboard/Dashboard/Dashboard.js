import React from 'react';
import './Dashboard.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartPlus, faCartArrowDown, faComment, faShoppingCart, faList, faHome, faListOl, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Profile from '../Profile/Profile';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import AllProducts from '../AllProducts/AllProducts';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from '../Rewiew/Review';
import PayBill from '../PayBill/PayBill';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const User = <FontAwesomeIcon icon={faUserCircle} />
    const Order = <FontAwesomeIcon icon={faCartArrowDown} />
    const ReviewIcon = <FontAwesomeIcon icon={faComment} />
    const PayIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const Add = <FontAwesomeIcon icon={faCartPlus} />
    const AllOrders = <FontAwesomeIcon icon={faList} />
    const Products = <FontAwesomeIcon icon={faListOl} />
    const Home = <FontAwesomeIcon icon={faHome} />
    const Logout = <FontAwesomeIcon icon={faSignOutAlt} />
    const Admin = <FontAwesomeIcon icon={faUser} />

    const { logOut, setUser, setIsLoading } = useAuth();
    const handleLogout = () => {
        logOut()
            .then((result) => {
                setUser({})
                Swal.fire(
                    "Good job!",
                    "Log Out SuccessFull!",
                    "success"
                )
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
        <>
            <Container fluid className="py-0 px-0">
                <Row>
                    <Col md={3}>
                        <Navbar bg="light" expand="lg" className="dashboard_section">
                            <Container>
                                {/* <Nav.Link as={NavLink} to="/">
                                <Navbar.Brand className="navbar-brand">FarhadStore</Navbar.Brand>
                            </Nav.Link> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="navbar flex-column navbar-expand-lg custom_nav-container">
                                        <Navbar.Brand className="navbar-brand text-warning">FarhadStore</Navbar.Brand>
                                        <Nav.Link as={NavLink} to={`${url}`}>{User} Profile</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/orders`}>{Order} My Orders</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/review`}>{ReviewIcon} Review</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/paybill`}>{PayIcon} Pay Bills</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/addproduct`}>{Add} Add Product</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/allorders`}>{AllOrders} Manage All Orders</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/allproducts`}>{Products} Manage All Products</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/makeadmin`}>{Admin} Make Admin</Nav.Link>
                                        <Nav.Link as={NavLink} to="/">{Home} Back To Home</Nav.Link>
                                        <Nav.Link onClick={handleLogout} as={NavLink} to="/">{Logout} Log Out</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route exact path={path}>
                                <Profile></Profile>
                            </Route>
                            <Route path={`${path}/orders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/paybill`}>
                                <PayBill></PayBill>
                            </Route>
                            <Route path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/allorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/allproducts`}>
                                <AllProducts></AllProducts>
                            </Route>
                            <Route path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;