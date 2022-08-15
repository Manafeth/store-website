import Button from '@mui/material/Button';
import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const PaymentDetail = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
        Payment Detail
      </Typography>
      <InputLabel
        shrink
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
        Promocode
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='HappyEid2022'
        name='promocode'
        sx={{ mb: 3 }}
        InputProps={{ endAdornment: <Button>Apply</Button> }}
      />
      <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
        Name On Card
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Ahmed Shalayel'
        name='nameCard'
        sx={{ mb: 3 }}
      />
      <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
        Card Number
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='4539 - 4751 - 5213  -1989'
        name='cardNumber'
        sx={{ mb: 3 }}
      />
      <Grid container spacing='40px'>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
            MM/YY
          </InputLabel>
          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='08/2024'
            name='firstName'
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
            CVV
          </InputLabel>

          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='998'
            name='cv'
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex' }}>
        <FormControlLabel
          control={<Checkbox defaultChecked color='default' />}
          label='Save as default card'
          sx={{ flex: '0.77' }}
        />
      </Box>
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
            width: '155px',
            height: '44px',
            backgroundColor: ' background.grayDisabled',
            mr: '20px',
          }}
        >
          Back
        </Button>
        <Button
          variant='contained'
          sx={{ width: '219px', height: '44px' }}
          type='submit'
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentDetail;
