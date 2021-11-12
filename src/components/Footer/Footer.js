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
    padding:'2%'
}
const Footer = () => {
    return (
        <Box style={footer} sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={12} sm={12} md={3} >
                    <div>
                        <h5>Services</h5>
                        <p>Web design</p>
                        <p>Development</p>
                        <p>Hosting</p>
                    </div>

                </Grid>


                <Grid item xs={12} sm={12} md={3} >
                    <div>
                        <h5>About</h5>
                        <p>Company</p>
                        <p>Team</p>
                        <p>Legacy</p>
                    </div>
                </Grid>


                <Grid item xs={12} sm={12} md={3} >
                    <div>
                        <h5>Careers</h5>
                        <p>Job openings</p>
                        <p>Employee success</p>
                        <p>Benefits</p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={3} >
                   <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                   
                   <span className="mx-2" > <i class="fab fa-facebook fa-2x"></i></span>
                   <span className="mx-2"> <i class="fab fa-twitter fa-2x"></i></span>
                   <span className="mx-2"><i class="fab fa-youtube fa-2x"></i></span>
                   <span className="mx-2"><i class="fab fa-linkedin fa-2x"></i></span>
                
                   </Box>
                   
                    
                   
                   
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;