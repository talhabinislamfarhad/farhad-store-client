import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Table } from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <div>
            {/* section starts  */}

            <section className="services" id="services">

                <h1 className="heading my-5"> ALL USER <span> LIST</span> </h1>
                <h1 className="heading my-5"> ALL USER <span> (8) </span> </h1>

                <div className="box-container">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Make admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="productImg"><img src="" alt="" /></td>
                                    <td>Title</td>
                                    <td>ex@gmail.com</td>
                                    <td><Button variant="warning">Delete Product</Button></td>
                                    {/* <td><Button variant="warning" onClick={() => handleDelete(allorders._id)} className="btn">Delete Package</Button></td> */}
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </div>

            </section>
        </div>
    );
};

export default MakeAdmin;