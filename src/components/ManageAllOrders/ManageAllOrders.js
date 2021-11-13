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

const ManageAllOrders = () => {
   
    const { user,admin } = useAuth();
    const [success,setSuccess]=useState(false);
    

    const [allOrders, setAllMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://mighty-journey-16776.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setAllMyOrders(data))
    }, [])

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
                const remainigServices= allOrders.filter(allOrder=>allOrder._id!==id)
                setAllMyOrders(remainigServices)
            }
        })
    }

   

    return (
        <Container>
            <h2>Manage All Orders</h2>
              <div>
                <Table  responsive="sm" className="table table-info table-striped">
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
                        allOrders.map(allOrder => <tbody>
                            <tr>

                                <td>{allOrder?.email}</td>
                                <td>{allOrder?.carname
                                }</td>
                                <td>${allOrder?.carprice}</td>
                                <td>{allOrder?.phone}</td>
                                <td>{allOrder?.address}</td>
                               
                                <td><Button onClick={() => handelDelete(allOrder._id)} variant="contained" style={{ backgroundColor: '#F93E57', color: '#FFFFFF' }}>Delete</Button></td>

                                
                            </tr>


                        </tbody>)
                    }

                </Table>



            </div>

        </Container>
    );
};

export default ManageAllOrders;