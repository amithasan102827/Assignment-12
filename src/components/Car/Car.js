import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Car = ({ car }) => {
  const { _id, name, image, price, description } = car
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
          <NavLink style={{textDecoration:'none'}} to={`/carDetails/${_id}`}>
            <Button size="small" color="primary">
              Buy Now
            </Button>
          </NavLink>

        </CardActions>
      </Card>
    </Grid>

  );
};

export default Car;