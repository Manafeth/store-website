import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

const AddressManagment = () => {
  return (
    <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
    }}
  >
              <Typography
                variant='h1'
                component='h1'
                sx={{ mb: 5 }}
              >
               Address managment
              </Typography>
    <Box
      sx={{
        pb: 4,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Typography variant='h2' component='span' sx={{ flex: '0.75' }}>
      Home address
      </Typography>
      <Switch color='success' />
    </Box>
    <Typography
      sx={{
        width: '76%',
        color: 'text.secondary',
        fontSize: '16px',
        mb: 5,
      }}
    >
      	As Sahafah, Olaya St. 6531, 3059 Riyadh 13321 Saudi Arabia
    </Typography>
    <Divider sx={{ mb: 5, width: '80%' }} />
   <Typography variant='h2' component='h1' sx={{ mb: 3, mt: 3 }}>
   Add new address
      </Typography>
      <InputLabel
        shrink
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
        Address 1
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Street name'
        name='streetName'
        sx={{ mb: 3 }}
      />
         <InputLabel
        shrink
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
        Address 2
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Street name'
        name='streetName'
        sx={{ mb: 3 }}
      />
        <InputLabel
        shrink
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
       City
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Select city'
        name='selectCity'
        sx={{ mb: 3 }}
      />
        <InputLabel
        shrink
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
       Country
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Select country'
        name='selectCountry'
        sx={{ mb: 3 }}
      />
     
     <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          pt: 7,
          pb: 5,
        }}
      >
        <Button
          variant='contained'
          color='secondary'
          sx={{
            color: 'secondary.contrastText',
            width: '92px',
            height: '44px',
            backgroundColor: ' background.grayDisabled',
            mr: '20px',
          }}
        >
          Cancel
        </Button>
        <Button variant='contained' sx={{  width: 'auto',
            height: '44px',}} type='submit'>
          Add new address
        </Button>
      </Box>
   

  
  </Box>
  )
}

export default AddressManagment
