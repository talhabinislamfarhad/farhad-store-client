import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';

const MyOrders = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://secure-coast-01633.herokuapp.com/myorders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [user?.email]);

    const handleOrderDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `https://secure-coast-01633.herokuapp.com/orderdelete/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            "Good job!",
                            "Deteted SuccessFull!",
                            "success"
                        )
                    }
                    history.push('/dashboard');
                });
        }
    }

    return (
        <div>
            <Container fluid>
                <h1 className="mt-5">MY ORDERS</h1>
                <Row xs={1} md={3} className="g-4 my-3">
                    {myOrders.map(orders => {
                        return (
                            <Col>
                                <div key={orders._id}>
                                    <Card className="watchs m-2">
                                        <Card.Img className="mx-auto card-img-top w-50 p-3" variant="top" src={orders?.confirm?.img} />
                                        <Card.Body>
                                            <Card.Title className="card-title text-capitalize">{orders?.confirm?.title}</Card.Title>
                                            <Card.Text>
                                                <div className="card-body py-3 px-2">
                                                    <p className="card-title">{orders?.confirm?.des}</p>
                                                    <div className="card-text d-flex justify-content-center">
                                                        <h3 className="line-through">${orders?.confirm?.price}</h3>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="warning" onClick={() => handleOrderDelete(orders._id)} className="btn">Delete Order</Button>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;