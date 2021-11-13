import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
// import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const handleUpdate = (id) => {
        const url = `https://secure-coast-01633.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    Swal.fire("WoW!",
                        "Status Update SuccessFull!",
                        "success"
                    )
                }
            })
    }
    // const {user} = useAuth();
    const [allUser, setAlluser] = useState([]);
    useEffect(() => {
        fetch('https://secure-coast-01633.herokuapp.com/users')
            .then((res) => res.json())
            .then((data) => setAlluser(data));
    });
    return (
        <>
            <div className="container manage-orders">
                <h1 className="text-center text-dark py-3">Make Admin</h1>
            </div>
            <Container className="py-5">
                <Row xs={12} md={12} className="g-4 mx-auto">
                    <Col>
                        <Table striped bordered hover responsive className="mx-0 my-0">
                            <thead>
                                <tr>
                                    {/* <th>Image</th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>User Role</th>
                                    <th>Make Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser.map(user => {
                                        return (
                                            <tr key={user._id}>
                                                {/* <td><Image style= {{height: '50px', width: '80px'}} src={user?.photoURL} fluid /></td> */}
                                                <td>{user?.displayName}</td>
                                                <td>{user?.email}</td>
                                                <td>{user?.role === 'admin' ? (<h6 className="text-success fw-bolder">
                                                    {user?.role}
                                                </h6>) : (<h6 className="text-danger fw-bolder">
                                                    {user?.role}{"basic"}
                                                </h6>)}</td>
                                                <td><Button onClick={() => handleUpdate(user._id)} variant="warning">Make Admin</Button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MakeAdmin;