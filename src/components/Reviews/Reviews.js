import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Review from '../Review/Review';
import { useState,useEffect } from 'react';
import useAuth from '../Hooks/useAuth';

//  const reviews=[
//     {
//         id:1,
//         name:"Smith",
//         image:"https://i.ibb.co/FBFjjWP/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
//         description:"The Mercedes Benz M4 is a high-performance sport coupe that serves as one of the fastest and most powerful cars in BMW's lineup. Both the M4 and the 4 Series coupe it's based on were completely redesigned for 2021, with new tech and styling backed by the most powerful M4 engine ever. For 2022 the M4 Competition is now available with all-wheel drive",
//         rating:5
//     },
//     {
//         id:2,
//         name:"Evans",
//         image:"https://i.ibb.co/NjbCXSv/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
//         description:"The Mercedes Benz M4 is a high-performance sport coupe that serves as one of the fastest and most powerful cars in BMW's lineup. Both the M4 and the 4 Series coupe it's based on were completely redesigned for 2021, with new tech and styling backed by the most powerful M4 engine ever. For 2022 the M4 Competition is now available with all-wheel drive",
//         rating:5
//     },
//     {
//         id:3,
//         name:"Johnson",
//         image:"https://i.ibb.co/sFQh2S1/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg",
//         description:"The Mercedes Benz M4 is a high-performance sport coupe that serves as one of the fastest and most powerful cars in BMW's lineup. Both the M4 and the 4 Series coupe it's based on were completely redesigned for 2021, with new tech and styling backed by the most powerful M4 engine ever. For 2022 the M4 Competition is now available with all-wheel drive",
//         rating:5
//     },
// ]

const Reviews = () => {
    
   const [reviews,setReviews]=useState([]);
   const {isLoading}=useAuth();
   useEffect(()=>{
       fetch("https://mighty-journey-16776.herokuapp.com/reviews")
       .then(res=>res.json())
       .then(data=>setReviews(data))
   },[])

    return (
        <div className="container" sx={{mb: 6}}>
            <h2>Customers Reviews</h2>
         {!isLoading && <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3, sm: 2}} columns={{ xs:12, sm: 12, md: 12 }}>
     
              {
                  reviews.map(review=><Review
                  key={review._id}
                  review={review}
                  ></Review>)
              }
            
          </Grid>
        
     
    </Box> } 

    {
                isLoading && <CircularProgress />
            }
    </div>
    );
};

export default Reviews;