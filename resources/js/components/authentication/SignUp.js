import React from 'react'
import { TextField, Typography, Button, Card, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import PhoneIcon from '@mui/icons-material/Phone';

const SignUp = () => {
    return (
        <>
            <Container sx={{ mt: 5, mb: 3 }}>
                <Card sx={{ }}>
                    <Box component={'form'} justifyContent={'center'} >
                        <Typography variant='h4' sx={{ textAlign: 'center', color: 'chocolate' }} mb={4}>Bumble Byte</Typography>
                        <Typography variant='h5' sx={{ textAlign: 'center',textDecoration:'underline' }}>Sign Up</Typography>
                        <Grid item container justifyContent={'center'} mt={2} mb={2}>
                            <TextField
                                label={'First Name'}
                                variant={'outlined'}
                                type={'text'}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <AccountCircle />
                                      </InputAdornment>
                                    ),
                                  }}
                                sx={{ width: 380 }}
                            />
                        </Grid>
                        <Grid item container justifyContent={'center'} mt={2} mb={2}>
                            <TextField
                                label={'Last Name'}
                                variant={'outlined'}
                                type={'text'}
                                sx={{ width: 380 }}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <AccountCircle />
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                        </Grid>
                        <Grid item container justifyContent={'center'} mt={2} mb={2}>
                            <TextField
                                label={'Email'}
                                variant={'outlined'}
                                type={'text'}
                                sx={{ width: 380 }}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EmailIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                        </Grid>
                        <Grid item container justifyContent={'center'} mt={2} mb={2}>
                            <TextField
                                label={'Mobile'}
                                variant={'outlined'}
                                type={'text'}
                                sx={{ width: 380 }}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <PhoneIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                        </Grid>
                        <Grid item container justifyContent={'center'} mt={2} mb={2}>
                            <TextField
                                label={'Password'}
                                variant={'outlined'}
                                type={'text'}
                                sx={{ width: 380 }}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <LockPersonIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                        </Grid>
                        <Grid item container justifyContent={'center'} mt={5} mb={5}>
                            <Button size='large' variant={'contained'} >Login</Button>
                        </Grid>
                    </Box>
                </Card>
            </Container>
        </>
    )
}

export default SignUp