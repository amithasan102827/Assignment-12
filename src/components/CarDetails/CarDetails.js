import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, TextField, Typography } from '@mui/material';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { shadows } from '@mui/system';
import NavigationBootstrap from '../NavigationBootstrap/NavigationBootstrap';


const CarDetails = () => {
    const [carDetails, setCarDetails] = useState([]);
    // const [allCarDetails, setAllCarDetails] = useState([]);
    const { detailsId } = useParams();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://mighty-journey-16776.herokuapp.com/newcars/${detailsId}`)
            .then(res => res.json())
            .then(data => setCarDetails(data))
    }, [])

    // useEffect(() => {
    //     fetch(`https://mighty-journey-16776.herokuapp.com/allcars/${allcarDetails}`)
    //         .then(res => res.json())
    //         .then(data => setAllCarDetails(data))
    // }, [])

    const initialInfo = { name: user.displayName, email: user.email };
    const [bookingInfo, setBookingInfo] = React.useState(initialInfo);





    const { watch, formState: { errors }, reset } = useForm();

    const { register, handleSubmit } = useForm({
        defaultValues: initialInfo
    });

    const onSubmit = data => {
        console.log(data);
        fetch("https://mighty-journey-16776.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(result => {
                console.log(data);
                if (result.insertedId) {
                    alert('order proceed  successfully')
                    reset()
                }
            })

    }


    return (
        <>
        <NavigationBootstrap></NavigationBootstrap>
        <div className="container" sx={{ mb: 3 }}>
            <h2 className="text-primary">Book Your Car</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={12} sm={12} md={6} >
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    // height="140"
                                    image={carDetails?.image}


                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Name: {carDetails?.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Price: {carDetails?.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {carDetails?.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card>

                    </Grid>


                    {/* FORM SECTON */}
                    <Grid item xs={12} sm={12} md={6} >
                        <Box style={{ height: '95vh', width: "100%", marginLeft: '5%' }}>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input type='text' name="name"  {...register("name")} style={{ width: '60%', height: '6vh', margin: '10px' }} /> <br />

                                <input type="email" name="email"   {...register("email")} style={{ width: '60%', height: '6vh', margin: '10px' }} /> <br />

                                <input type='text' placeholder="Car Name" name="carname" {...register("carname")} style={{ width: '60%', height: '6vh', margin: '10px' }} /> <br />

                                <input type='text' placeholder="Car Price" name="carprice"  {...register("carprice")} style={{ width: '60%', height: '6vh', margin: '10px' }} /> <br />

                                <input type='number' placeholder="Your Phone"  {...register("phone")} style={{ width: '60%', height: '6vh', margin: '10px' }} /> <br />

                                <input type='text' placeholder="Your Address"  {...register("address")} style={{ width: '60%', height: '6vh', margin: '10px' }} /> <br />




                                <input type="submit" style={{ width: '62%', height: '6vh', margin: '10px', backgroundColor: 'hotpink', border: 'none', color: 'white' }} />
                            </form>



                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
        </>
    );
};

export default CarDetails;