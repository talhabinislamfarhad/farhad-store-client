import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Brand from '../Brand/Brand';
import Fretures from '../Features/Features';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseWatchs from '../../../hooks/UseWatchs';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [watchs] = UseWatchs();
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Brand></Brand>
            <Fretures></Fretures>
            <div>
                <Container fluid>
                    <h1 className="mt-5">LATEST PRODUCTS</h1>
                    <Row xs={1} md={3} className="g-4 my-3">
                        {watchs.slice(0, 6).map(watchs => {
                            return (
                                <Col>
                                    <div key={watchs._id}>
                                        <Card className="watchs m-2">
                                            <Card.Img className="mx-auto card-img-top w-50 p-3" variant="top" src={watchs.img} />
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
            </div>
            <Offer></Offer>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;