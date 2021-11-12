
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActionArea, CardActions, CardContent, Container, Typography } from '@mui/material';
import repairImg from '../../images/car-g2f299f322_1280.png';
import { margin } from '@mui/system';



const WhyChooseUs = () => {
    return (
        <div className="container mt-5" style={{backgroundColor:'#FBFCFC ',}} >
            <h2>Why Choose Us</h2>
            <Box style={{ marginBottom: "20px" }} sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>

                    <Grid item xs={12} sm={12} md={6}>


                        <Box style={{ textAlign: "start" ,margin:'10px' }}>
                            <Typography variant="h6">All Brands</Typography>
                            <Typography variant="body2">
                            Getting a car gives you the freedom to commute anywhere you need to
                            </Typography>
                        </Box>
                        <Box style={{ textAlign: "start",margin:'10px' }}>
                            <Typography variant="h6">Long Term Warrenty</Typography>
                            <Typography variant="body2">
                                
                                Getting a car gives you the freedom to commute anywhere you need to

                            </Typography>
                        </Box>
                        <Box style={{ textAlign: "start",margin:'10px' }}>
                            <Typography variant="h6">
                                Free Support</Typography>
                            <Typography variant="body2">
                            Getting a car gives you the freedom to commute anywhere you need to
                            </Typography>
                        </Box>
                        <Box style={{ textAlign: "start",margin:'10px' }}>
                            <Typography variant="h6">
                            Affordable</Typography>
                            <Typography variant="body2">
                            Getting a car gives you the freedom to commute anywhere you need to
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} style={{marginBottom:'15px'}}>
                        <img style={{width:'100%',height:'50vh'}} src={repairImg} alt="" />
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default WhyChooseUs;