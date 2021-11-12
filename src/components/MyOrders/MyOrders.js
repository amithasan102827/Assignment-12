import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Grid } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth();

    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://mighty-journey-16776.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    // DELETE ORDERS
    const handelDelete = (id) => {
        const url = `https://mighty-journey-16776.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('are sure to delete')
                    const remainigServices = myOrders.filter(myOrder => myOrder._id !== id)
                    setMyOrders(remainigServices)
                }
            })
    }
    return (
        <Container>

           <h2>My Orders</h2>

            <div>
                <Table responsive="lg" className="table table-primary table-striped">
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>CarName</th>
                            <th>CarPrice</th>
                            <th>Phone</th>

                            <th>Address</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    {
                        myOrders.map(myOrder => <tbody>
                            <tr>

                                <td>{myOrder?.email}</td>
                                <td>{myOrder?.carname
                                }</td>
                                <td>${myOrder?.carprice}</td>
                                <td>{myOrder?.phone}</td>
                                <td>{myOrder?.address}</td>
                                <td><Button onClick={() => handelDelete(myOrder._id)} variant="contained" style={{ backgroundColor: '#F93E57', color: '#FFFFFF' }}>Delete</Button></td>
                            </tr>


                        </tbody>)
                    }

                </Table>



            </div>


        </Container>
    );
};

export default MyOrders;