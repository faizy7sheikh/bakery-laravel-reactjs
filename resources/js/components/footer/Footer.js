import { AppBar, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const footer = () => {
  return (
    <>
      <AppBar position='relative' sx={{ height: 200 }}>
        <Container sx={{ background: '#864313'}} >
          <Grid direction={'row'} container justifyContent="space-evenly" mt={10}>
            <Grid  container item xs={12} sm={6}>
              <Typography>
                Address: Benguluru-90
              </Typography>
            </Grid>
            <Grid container item xs={12} sm={6}>
              <Typography>
                Developed By: Bumble Beez
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  )
}

export default footer