import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Container, IconButton,Badge } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import cake from '../components/image/cake.jpg';
import Footer from '../components/footer/Footer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Box } from '@mui/system';
import CakeSection from './CakeSection';
function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <AppBar position='fixed' >
                            <Toolbar>
                                <Typography variant='h6' sx={{ flexGrow: 1 }}>Bumble Byte</Typography>
                                <Badge badgeContent={4} color="primary" >
                                <IconButton color="inherit" aria-label="add to shopping cart" >
                                    <AddShoppingCartIcon />
                                </IconButton>
                                </Badge>
                                <Button variant='link' color='inherit' href="/login" startIcon={<LoginIcon />}>login</Button>
                                <Button variant='text' color='inherit' href='/signup' endIcon={<LogoutIcon />}>Logout</Button>
                            </Toolbar>
                        </AppBar>
                        <Container>
                            <Grid container direction={'row'} alignItems="center">
                                <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                                    <Typography variant='h5'>Bumble Byte cake </Typography>
                                    <Typography variant='h6'>We offer Tasty and Fresh Cake...</Typography>
                                    <Button variant='contained' sx={{ borderRadius: 10 }}>Contact Us</Button>
                                </Grid>
                                <Grid container item xs={12} sm={6} order={{ xs: 1, sm: 2 }} justifyContent="center">
                                    <Box component='img' src={cake} marginTop={9} height={'50%'} sx={{ backgroundPosition: 'center', width: '100%' }} >

                                    </Box>
                                </Grid>
                            </Grid>
                            <CakeSection />
                        </Container>
                        <Footer />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;


