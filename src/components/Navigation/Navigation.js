import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {

    Link, NavLink
} from "react-router-dom";
import useAuth from '../Hooks/useAuth';
import { Container } from '@mui/material';
import { fontSize } from '@mui/system';



const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
       

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{fontSize:'1.8vw'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>

                    <NavLink to="/exploreAllCars" style={{ textDecoration: 'none', color: 'white',  }}>
                        <Button style={{fontSize:'1.1vw'}} color="inherit">ExploreAllCars</Button>
                    </NavLink>
                    <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button style={{fontSize:'1.1vw'}}  color="inherit">Login</Button>
                    </NavLink>
                   { user.email && <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button style={{fontSize:'1.1vw'}}  color="inherit">DashBoard</Button>
                    </NavLink>}
                    <Typography style={{ color: ' #F0F45F',fontSize:'1.1vw' }}>
                        {
                            user.email && <p>welcome {user.email}</p>
                        }
                    </Typography>
                    {
                        user.email && <NavLink style={{ textDecoration: 'none', color: 'red' }} to=""> <Button style={{fontSize:'1.1vw'}}  onClick={logOut} color="inherit">Logout</Button> </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
     

    );
};

export default Navigation;