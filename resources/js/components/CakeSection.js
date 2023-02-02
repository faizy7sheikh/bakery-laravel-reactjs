import React from 'react'
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import { Stack } from '@mui/system';
import Contact from './Contact';

const CakeSection = () => {
    const cakes = [
        {
            name: "Pound Cake",
            image: "https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }, {
            name: "Sponge Cake",
            image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }, {
            name: "Genoise Cake",
            image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }, {
            name: "Biscuit Cake",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }, {
            name: "Angel Food Cake",
            image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }, {
            name: "Chiffon Cake",
            image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }, {
            name: "Baked Flourless Cake",
            image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }, {
            name: "Cup Cake",
            image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }, {
            name: "Chocolate Sweety",
            image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },


    ];

    return (
        <>
            <Typography variant='h4' mt={6} mb={6}>Cakes-</Typography>
            <Stack direction={'row'} sx={{flexWrap:'wrap'}} justifyContent="space-evenly">
                {
                    cakes.map(cake => {
                        return (
                            <Card sx={{ minWidth: "250px",mb:2}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={cake.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {cake.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        );
                    })
                }
            </Stack>
            <Contact/>
        </>
    )
}

export default CakeSection