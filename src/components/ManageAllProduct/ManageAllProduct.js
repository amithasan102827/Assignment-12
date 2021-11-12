import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const ManageAllProduct = () => {
    const {isLoading}=useAuth();
    const [allProducts,setAllProducts]=useState([]);

    useEffect(()=>{
        fetch("https://mighty-journey-16776.herokuapp.com/allcars")
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])


    // DELETE PRODUCT 
    const handelDelete=(id)=>{
        const url=`https://mighty-journey-16776.herokuapp.com/allcars/${id}`;
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                alert('are sure to delete')
                const remainigServices= allProducts.filter(allProduct=>allProduct._id!==id)
                setAllProducts(remainigServices)
            }
        })
    }


    return (
        <Container sx={{ mb: 6 }}>
        <h2>Manage All Product</h2>
        {!isLoading && <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3, sm: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                {
                   allProducts.map(allProduct=> <Grid item xs={12} sm={12} md={4} sx={{ mt: 1 }} >
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          // height="140"
                          image={allProduct?.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {allProduct?.name}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {allProduct?.price}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {allProduct?.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                      
                      <Button onClick={()=>handelDelete(allProduct?._id)} variant="outlined" style={{color: 'red'}}>Delete</Button>
                      </CardActions>
                    </Card>
                  </Grid>) 
                }

            </Grid>


        </Box>}

        {
            isLoading && <CircularProgress />
        }
    </Container>
    );
};

export default ManageAllProduct;