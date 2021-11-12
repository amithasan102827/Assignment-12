import { useState } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import loginImg from '../../images/login2.png'

import {
  useHistory,
  useLocation
} from "react-router-dom";
import useAuth from '../Hooks/useAuth';
import NavigationBootstrap from '../NavigationBootstrap/NavigationBootstrap';

const Login = () => {
  const [loginData, setLoginData] = useState({});
 const location=useLocation();
 const history =useHistory();
  
    
 const { loginUser, user, isLoading ,singInWithGoogle} = useAuth();
  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field, value);

  }
  const handleLogin = (e) => {
    e.preventDefault()
   loginUser(loginData.email,loginData.password,location,history)

  }
  const handleGoogleLogin=()=>{
       singInWithGoogle(location,history);
  }
  return (
    <>
    <NavigationBootstrap></NavigationBootstrap>
    <Container style={{marginBottom:'60px'}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>

        <Grid style={{ marginTop: '50px' }} item xs={12} sm={12} md={6}  >
          <Box sx={{ boxShadow: 3 }} style={{ height: '70vh', width: '60%', marginLeft: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

           { !isLoading && <form onSubmit={handleLogin}  >
              
              <Typography style={{ marginBottom: '60px' }} variant="h6" gutterBottom>
                Login
              </Typography>
              <TextField style={{ width: '75%', margin: '10px' }} id="standard-basic" name="email" label="Your Email" variant="standard" onChange={handleOnChange} />
              <TextField style={{ width: '75%', margin: '10px' }} id="standard-basic" onChange={handleOnChange} type="password" name="password" label="Your Password" variant="standard" />
              <Button type="submit" variant="contained" style={{ width: '75%', margin: '10px', marginTop: '20px' }}>Login</Button>

              <NavLink style={{ textDecoration: 'none' }} to="/register"><Button href="#text-buttons">New User? Please Register</Button></NavLink>
                 

              <Button onClick={handleGoogleLogin} variant="contained">Google SingIn</Button>
              
            </form>}

            {
                isLoading && <CircularProgress />
              }
              
              
          </Box>
              {
                user.email && <Alert style={{marginTop:'20px'}} severity="success">user login successfully</Alert>
              }
              {/* {
                authError && <Alert severity="error">This is an error alert — check it out!</Alert>
              } */}

        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img style={{ width: '100%', height: '80vh', marginTop:"4%" }} src={loginImg} alt="" />
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default Login;