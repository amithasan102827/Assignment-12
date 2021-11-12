import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,  Grid } from '@mui/material';

const Review = ({review}) => {
   
    return (
        <Grid item xs={12} sm={12} md={4} sx={{mt:1}} >
        <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            // height="140"
            image={review.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {review.name}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
             {review.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
           Buy Now
          </Button>
        </CardActions>
      </Card>
      </Grid>
    );
};

export default Review;