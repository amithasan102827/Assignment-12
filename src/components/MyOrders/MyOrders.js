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
    const handelDelete=(id)=>{
        const url=`https://mighty-journey-16776.herokuapp.com/orders/${id}`;
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                alert('are sure to delete')
                const remainigServices= myOrders.filter(myOrder=>myOrder._id!==id)
                setMyOrders(remainigServices)
            }
        })
    }
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={12} >
            <h2>My Orders</h2>
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Car Name</TableCell>
                        <TableCell align="right">Car Price</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myOrders.map((myOrder) => (
                        <TableRow
                            key={myOrder._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {myOrder?.name}
                            </TableCell>
                            <TableCell align="right">{myOrder?.email
                            }</TableCell>
                            <TableCell align="right">{myOrder?.carname
                            }</TableCell>
                            <TableCell align="right">${myOrder?.carprice}</TableCell>
                            <TableCell align="right">{myOrder?.phone}</TableCell>
                            <TableCell align="right">{myOrder?.address}</TableCell>
                            <TableCell align="right"><Button onClick={()=>handelDelete(myOrder._id)} variant="contained" style={{backgroundColor: '#F93E57', color: '#FFFFFF'}}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        </Grid>
        </Container>
    );
};

export default MyOrders;