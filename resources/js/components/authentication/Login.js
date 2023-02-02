import { TextField, Typography, Button, Card, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import backGroundImage from '../image/cake.jpg'




const Login = () => {
  const backImg = {
    backGroundImage:`url(${backGroundImage})`,
    
  }
  return (
    <Container sx={{ mt: 5, mb: 3 }}>
      <Card sx={{ backgroundImage:backImg.backGroundImage,backgroundOrigin:'content-box'}}>
        <Box component={'form'} justifyContent={'center'} >
          <Typography variant='h4' sx={{ textAlign: 'center',color:'chocolate' }} mb={4}>Bumble Byte</Typography>
          <Typography variant='h5' sx={{ textAlign: 'center' }}>Login</Typography>
          <Grid item container justifyContent={'center'} mt={5} mb={2}>
            <TextField
              label={'Email/Mobile'}
              variant={'outlined'}
              type={'text'}
              sx={{ width: 380 }}
            />
          </Grid>
          <Grid item container justifyContent={'center'} mt={5} mb={2}>
            <TextField
              label={'Password'}
              variant={'outlined'}
              type={'text'}
              sx={{ width: 380 }}
            />
          </Grid>
          <Grid item container justifyContent={'center'}  mt={5} mb={5}>
            <Button size='large' variant={'contained'} >Login</Button>
          </Grid>
        </Box>
      </Card>
    </Container>
  )
}

export default Login