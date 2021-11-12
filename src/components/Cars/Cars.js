import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container } from '@mui/material';
import Car from '../Car/Car';
import { useState, useEffect } from 'react';
import useAuth from '../Hooks/useAuth';


// const cars=[
//     {
//         id:1,
//         name:"Mercedes Benz",
//         price:"$12000",
//         image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-mercedes-benz-e-class-coupe-1548703839.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:2,
//         name:"SEDAN",
//         price:"$12000",
//         image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:3,
//         name:"STATION WAGON",
//         price:"$12000",
//         image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-volvo-v60-1558105490.jpg?crop=1xw:1xh;center,top&resize=980:*",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:4,
//         name:"Honda ",
//         price:"$22000",
//         image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-hyundai-kona-1548195339.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:5,
//         name:"Honda",
//         price:"$20000",
//         image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-chrysler-pacifica-1548198350.jpg?crop=1xw:1xh;center,top&resize=980:*",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:6,
//         name:"Honda",
//         price:"$18000",
//         image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-ridgeline-1548198293.jpg?crop=1xw:1xh;center,top&resize=980:*",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     }
// ]

const Cars = () => {
    const [cars, setCars] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch("https://mighty-journey-16776.herokuapp.com/newcars")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className="container mt-3 mb-5"  sx={{ mb: 6 }}>
            <h2 className="">Our New Cars</h2>
            {!isLoading && <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3, sm: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>)
                    }

                </Grid>


            </Box>}

            {
                isLoading && <CircularProgress />
            }
        </div>


    );
};

export default Cars;