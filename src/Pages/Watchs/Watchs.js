import React from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseWatchs from '../../hooks/UseWatchs';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Watchs = () => {
    const [watchs] = UseWatchs();
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <Container fluid>
                <h1 className="mt-5">ALL PRODUCTS</h1>
                <Row xs={1} md={3} className="g-4 my-3">
                    {watchs.map(watchs => {
                        return (
                            <Col>
                                <div key={watchs._id}>
                                    <Card className="watchs m-2">
                                        <Card.Img className="mx-auto card-img-top w-75 p-3" variant="top" src={watchs.img} />
                                        <Card.Body>
                                            <Card.Title className="card-title text-capitalize">{watchs.title}</Card.Title>
                                            <Card.Text>
                                                <div className="card-body py-3 px-2">
                                                    <p className="card-title">{watchs.description}</p>
                                                    <div className="card-text d-flex justify-content-center">
                                                        <h3 className="line-through">${watchs.price}</h3>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Link to={`/bookwatch/${watchs._id}`}>
                                                <Button variant="warning">Buy Now</Button></Link>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Watchs;