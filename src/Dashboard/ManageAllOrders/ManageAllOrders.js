import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import { Button, Col, Table } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const { displayName } = user;

    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageorders')
            .then((res) => res.json())
            .then((data) => setManageOrder(data));
    });
    const handleDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `http://localhost:5000/allorderdelete/${id}`;

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
                })
        }
    }

    const handleUpdate = (id) => {
        const url = `http://localhost:5000/placeorders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(manageOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        "Good job!",
                        "Approved SuccessFull!",
                        "success"
                    )
                }
            })
    }
    return (
        <div>
            {/* section starts  */}

            <section className="services" id="services">

                <h1 className="heading my-5"> ALL ORDERS <span> LIST</span> </h1>

                <div className="box-container">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Name</th>
                                    <th>Order Status</th>
                                    <th>Role</th>
                                    <th>Cancel Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manageOrder.map(allorders => {
                                    return (
                                        <tr key={allorders._id}>
                                            <td className="productImg"><img src={allorders?.confirm?.img} alt="" /></td>
                                            <td>{allorders?.confirm?.title}</td>
                                            <td>{displayName}</td>
                                            <td>{allorders.status}</td>
                                            <td><Button variant="info" onClick={() => handleUpdate(allorders._id)} className="btn">Approve</Button></td>
                                            <td><Button variant="warning" onClick={() => handleDelete(allorders._id)} className="btn">Delete Package</Button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </div>

            </section>

        </div>
    );
};

export default ManageAllOrders;