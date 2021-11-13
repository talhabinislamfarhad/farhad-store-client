import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Rating from '../../../Shared/Rating';

const Review = (props) => {
    const { name, img, dsc, rate } = props.review;
    return (
        <div>
            <Card className="watchs m-2">
                <Card.Img className="mx-auto card-img-top w-75 p-3" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="card-title text-capitalize">{name}</Card.Title>
                    <Card.Text>
                        <div className="card-body py-3 px-2">
                            <p className="card-title">{dsc}</p>
                            <Rating rate={rate}></Rating>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;