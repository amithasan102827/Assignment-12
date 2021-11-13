import { Button, Grid, TextField, Typography, Container, Alert, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import registerImg from '../../images/login2.png'
import useAuth from '../Hooks/useAuth';
import {
    useHistory,
    useLocation
  } from "react-router-dom";
import NavigationBootstrap from '../NavigationBootstrap/NavigationBootstrap';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { registerUser, user, isLoading } = useAuth();
    const location=useLocation();
    const history=useHistory();


    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);

    }

    const handleRegister = (e) => {

        if (loginData.password !== loginData.password2) {
            alert('password is not match')
        }
        registerUser(loginData.email, loginData.password, loginData.name,location,history)
        e.preventDefault()
    }

    return (
        <>
        <NavigationBootstrap></NavigationBootstrap>
        <div className="container" style={{marginBottom:'70px'}} sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>

                <Grid  style={{ marginTop: '50px' }} item xs={12} sm={12} md={6}  >
                    <Box sx={{ boxShadow: 3 }}  style={{ height: '75vh', width: '60%', marginLeft: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      { !isLoading && <form  onSubmit={handleRegister} >
                            <Typography  variant="h6" gutterBottom>
                                Register
                            </Typography>
                            <TextField style={{ width: '75%', margin: '10px' }} id="standard-basic" name="name" label="Your name" variant="standard" onBlur={handleonBlur} />

                            <TextField style={{ width: '75%', margin: '10px' }} id="standard-basic" name="email" label="Your Email" variant="standard" onBlur={handleonBlur} />

                            <TextField style={{ width: '75%', margin: '10px' }} id="standard-basic" onBlur={handleonBlur} type="password" name="password" label="Your Password" variant="standard" />

                            <TextField style={{ width: '75%', margin: '10px' }} id="standard-basic" onBlur={handleonBlur} type="password" name="password2" label=" Confirm Your Password" variant="standard" />

                            <Button type="submit" variant="contained" style={{ width: '75%', margin: '10px', marginTop: '20px' }}>Register</Button>

                            <NavLink style={{ textDecoration: 'none' }} to="/login"><Button href="#text-buttons">Already Register? Please Login</Button></NavLink>


                            {
                                user.email && <Alert severity="success">user login successfully</Alert>
                            }

                        </form>}

                        {
                            isLoading && <CircularProgress />
                        }

                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: '100%', height: '80vh', marginTop: "4%" }} src={registerImg} alt="" />
                </Grid>
            </Grid>
        </div>
        </>
    );
};

export default Register;