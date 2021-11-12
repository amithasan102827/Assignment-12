import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const footer={
    backgroundColor:'#3498DB ',
    width:'100%',
    color:'white',
    // height:'40vh',
    marginTop:'15px',
    // marginBottom:'10px'
}
const Footer = () => {
    return (
        <Box style={footer} sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={12} sm={12} md={3} >
                    <Typography>
                        <h3>Services</h3>
                        <h5>Web design</h5>
                        <h5>Development</h5>
                        <h5>Hosting</h5>
                    </Typography>

                </Grid>


                <Grid item xs={12} sm={12} md={3} >
                    <Typography>
                        <h3>About</h3>
                        <h5>Company</h5>
                        <h5>Team</h5>
                        <h5>Legacy</h5>
                    </Typography>
                </Grid>


                <Grid item xs={12} sm={12} md={3} >
                    <Typography>
                        <h3>Careers</h3>
                        <h5>Job openings</h5>
                        <h5>Employee success</h5>
                        <h5>Benefits</h5>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={3} >
                   <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                   
                   <Typography sx={{mx: 2}}> <i class="fab fa-facebook fa-2x"></i></Typography>
                   <Typography> <i class="fab fa-twitter fa-2x"></i></Typography>
                   <Typography sx={{mx: 2}}><i class="fab fa-youtube fa-2x"></i></Typography>
                   <Typography sx={{mx: 1}}><i class="fab fa-linkedin fa-2x"></i></Typography>
                
                   </Box>
                   
                    
                   
                   
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;