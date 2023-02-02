import { TextField, Typography ,Button} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Typography variant='h5' mb={6} mt={6} >Contact Us</Typography>
      <Box component={'form'}>

        <TextField
          variant='outlined'
          label={'First Name'}
          type={'text'}
          sx={{ width: "300px", m: 1 }}
        />
        <TextField
          variant='outlined'
          label={'Last Name'}
          type={'text'}
          sx={{ width: "300px", m: 1 }}
        />
        <TextField
          variant='outlined'
          label={'Phone No'}
          type={'number'}
          sx={{ width: "300px", m: 1 }}
        />
        <TextField
          variant='outlined'
          label={'Message'}
          type={'text'}
          multiline
          rows={4}
          fullWidth
          sx={{ width: '940px', m: 1, marginRight:200 }}
        />
        <Button size='large' variant="contained" sx={{ m:1,borderRadius:10 }}>Send</Button>
      </Box>
    </>
  )
}

export default Contact