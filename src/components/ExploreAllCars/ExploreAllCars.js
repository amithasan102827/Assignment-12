import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ExploreAllCar from '../ExploreAllCar/ExploreAllCar';
import useAuth from '../Hooks/useAuth';




// const cars=[
//     {
//         id:1,
//         name:"Nissan Rogue",
//         price:"$12000",
//         image:"https://media.ed.edmunds-media.com/nissan/rogue/2021/oem/2021_nissan_rogue_4dr-suv_platinum_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:2,
//         name:"Volkswagen Taos",
//         price:"$19000",
//         image:"https://media.ed.edmunds-media.com/volkswagen/taos/2022/oem/2022_volkswagen_taos_4dr-suv_se_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:3,
//         name:"Chevy Trailblazer",
//         price:"$12000",
//         image:"https://media.ed.edmunds-media.com/chevrolet/trailblazer/2021/oem/2021_chevrolet_trailblazer_4dr-suv_activ_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:4,
//         name:"Mazda CX-30 ",
//         price:"$22000",
//         image:"https://media.ed.edmunds-media.com/mazda/cx-30/2021/oem/2021_mazda_cx-30_4dr-suv_premium_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:5,
//         name:" Honda CR-V",
//         price:"$20000",
//         image:"https://media.ed.edmunds-media.com/honda/cr-v/2020/oem/2020_honda_cr-v_4dr-suv_touring_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:6,
//         name:"Kia Sorento",
//         price:"$11000",
//         image:"https://media.ed.edmunds-media.com/kia/sorento/2022/oem/2022_kia_sorento_4dr-suv_sx_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:7,
//         name:"Mitsubishi Outlander",
//         price:"$13000",
//         image:"https://media.ed.edmunds-media.com/mitsubishi/outlander/2022/oem/2022_mitsubishi_outlander_4dr-suv_se-launch-edition_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:8,
//         name:"Volkswagen Tiguan",
//         price:"$15000",
//         image:"https://media.ed.edmunds-media.com/volkswagen/tiguan/2020/oem/2020_volkswagen_tiguan_4dr-suv_sel-4motion_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:9,
//         name:"Audi Q7",
//         price:"$175000",
//         image:"https://media.ed.edmunds-media.com/audi/q7/2020/oem/2020_audi_q7_4dr-suv_prestige-55-tfsi-quattro_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:10,
//         name:" Acura MDX",
//         price:"$165000",
//         image:"https://media.ed.edmunds-media.com/acura/mdx/2022/oem/2022_acura_mdx_4dr-suv_base_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:11,
//         name:" BMW X3 M",
//         price:"$180000",
//         image:"https://media.ed.edmunds-media.com/bmw/x3-m/2021/oem/2021_bmw_x3-m_4dr-suv_base_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
//     {
//         id:12,
//         name:" Lamborghini Urus",
//         price:"$100000",
//         image:"https://media.ed.edmunds-media.com/lamborghini/urus/2019/oem/2019_lamborghini_urus_4dr-suv_base_fq_oem_1_815.jpg",
//         description:"A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster."
//     },
// ]
const ExploreAllCars = () => {
    const [allCars,setAllCars]=useState([]);
    const {isLoading}=useAuth();

    useEffect(() => {
        fetch("https://mighty-journey-16776.herokuapp.com/allcars")
            .then(res => res.json())
            .then(data => setAllCars(data))
    }, [])
    return (
        <div>
            <Container sx={{ mb: 6 }}>
            <h2>All Brand Cars</h2>
            {!isLoading && <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3, sm: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    {
                        allCars.map(car =><ExploreAllCar
                        car={car}
                        key={car._id}
                        ></ExploreAllCar> )
                    }

                </Grid>


            </Box>}

            {
                isLoading && <CircularProgress />
            }
        </Container>
        </div>
    );
};

export default ExploreAllCars;