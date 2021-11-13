import React, { useEffect, useState } from 'react';
import './BookWatch.css'
import { FloatingLabel, Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const BookWatch = () => {

    const { user } = useAuth();
    const history = useHistory();
    const { id } = useParams();
    const [confirm, setConfirm] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allconfirmorder/${id}`)
            .then(res => res.json())
            .then(data => {
                setConfirm(data)
            })
    }, [id])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        data.email = user?.email;
        data.confirm = confirm;
        fetch('http://localhost:5000/placeorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    "Good job!",
                    "Confirm Order SuccessFull!",
                    "success"
                )
                history.push('/dashboard/orders')
            })
    };
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <Container className="my-5">
                <h1>BOOK PRODUCT</h1>
                <Row>
                    <Col className="mx-auto mt-5" md={6} xs={12}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FloatingLabel
                                controlId="floatingname"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control readOnly defaultValue={user?.displayName} {...register("name")} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingemail" label="Email" className="mb-3">
                                <Form.Control readOnly defaultValue={user?.email} {...register("email")} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingcountry" label="Country/Region" className="mb-3">
                                <Form.Control type="text" readOnly defaultValue="Bangladesh" {...register("country")} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingcity" label="City" className="mb-3">
                                <Form.Control type="text" placeholder="ex:Brahmanbaria" {...register("city")} required />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingaddress" label="Address" className="mb-3">
                                <Form.Control type="text" placeholder="ex:10, Collage Para" {...register("address")} required />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingphone" label="Phone" className="mb-3">
                                <Form.Control type="number" placeholder="Phone" {...register("phone")} required />
                            </FloatingLabel>
                            <Button type="submit" variant="warning">Confirm Order</Button>
                        </Form>
                    </Col>
                    <Col className="mx-auto mt-5" md={6} xs={12}>
                        <Card className="watchs m-2">
                            <Card.Img className="mx-auto card-img-top w-50 p-3" variant="top" src={confirm.img} />
                            <Card.Body>
                                <Card.Title className="card-title text-capitalize">{confirm.title}</Card.Title>
                                <Card.Text>
                                    <div className="card-body py-3 px-2">
                                        <p className="card-title">{confirm.description}</p>
                                        <div className="card-text d-flex justify-content-center">
                                            <h3 className="line-through">$ {confirm.price}</h3>
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BookWatch;