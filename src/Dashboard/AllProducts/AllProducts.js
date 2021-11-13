import React, { useEffect, useState } from 'react';
import { Col, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import UseWatchs from '../../hooks/UseWatchs';
import Swal from 'sweetalert2';

const AllProducts = () => {
    const [watchs] = UseWatchs();
    const { user } = useAuth();
    const history = useHistory();
    const [allProducts, setAllProducts] = useState([]);
    console.log(allProducts);
    useEffect(() => {
        fetch("https://secure-coast-01633.herokuapp.com/allproducts")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    }, [user]);
    const handleProductDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `https://secure-coast-01633.herokuapp.com/deleteallproduct/${id}`;

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
            {/* section starts  */}

            <section className="services" id="services">

                <h1 className="heading my-5"> ALL PRODUCTS <span> LIST</span> </h1>

                <div className="box-container">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {watchs.map(watchs => {
                                    return (
                                        <tr key={watchs._id}>
                                            <td className="productImg"><img src={watchs.img} alt="" /></td>
                                            <td>{watchs.title}</td>
                                            <td><Button onClick={() => handleProductDelete(watchs._id)} variant="warning">Delete Product</Button></td>
                                            {/* <td><Button variant="warning" onClick={() => handleDelete(allorders._id)} className="btn">Delete Package</Button></td> */}
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

export default AllProducts;