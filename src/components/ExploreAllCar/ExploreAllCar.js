import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ExploreAllCar = ({car}) => {
    const { _id, name, image, price, description } = car;
    return (
        <Grid item xs={12} sm={12} md={4} sx={{ mt: 1 }} >
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              // height="140"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <NavLink to={`/allCarDetails/${_id}`}>
              <Button size="small" color="primary">
                Buy Now
              </Button>
            </NavLink>
  
          </CardActions>
        </Card>
      </Grid>
  
    );
};

export default ExploreAllCar;