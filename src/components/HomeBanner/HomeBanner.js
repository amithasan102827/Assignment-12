
import { Container, Typography } from '@mui/material';
import { border, Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../images/banner.jpg'


const bannerBg = {

    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
    
    backgroundPosition: "center center",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    padding: '20%',
    // border: '2px solid red',
    position: "relative",

}

const text = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'red',
}
const HomeBanner = () => {

    return (

        <Container style={bannerBg} sx={{mb: 5}}  >
            <Box  sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Typography style={text}><h1 style={{fontSize:'4vw'}}>Find Your Best Car Here</h1>
                        <p style={{fontSize:'2vw'}}>And I'm a Photographer</p></Typography>
                </Grid>
            </Box>
        </Container>

    );
};

export default HomeBanner;