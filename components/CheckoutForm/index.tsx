import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
interface Props {
  handleNext: () => void;
}

const CheckoutForm: FC<Props> = ({ handleNext }) => {
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
      {t('checkOut.checkOut')}
      </Typography>

      <Grid container spacing='40px' sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
            First Name
          </InputLabel>
          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='Ahmed'
            name='firstName'
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
            Last Name
          </InputLabel>

          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='Mahmoud'
            name='lastName'
          />
        </Grid>
      </Grid>
      <InputLabel
        shrink
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
        Address
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='As Sahafah, Olaya St. 6531, 3059 Riyadh 13321 Saudi Arabia'
        name='address'
        sx={{ mb: 3 }}
      />
      <Grid container spacing='40px' sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
            Postal Code
          </InputLabel>
          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='13321'
            name='postalCode'
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
            City
          </InputLabel>

          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='Olaya'
            name='city'
          />
        </Grid>
      </Grid>
      <Grid container spacing='40px' sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
            Province/State
          </InputLabel>
          <TextField
            id='outlined-basic'
            select
            variant='outlined'
            fullWidth
            margin='normal'
            name='state'
            sx={{ marginTop: '0px' }}
          >
            <MenuItem value={0}>Riyadh</MenuItem>

            <MenuItem value={1}>test</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
            Country
          </InputLabel>

          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='Saudi Arabia'
            name='country'
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Radio
          value='a'
          name='radio-buttons'
          inputProps={{ 'aria-label': 'A' }}
        />
        <Typography variant='h3' component='h1'>
          Save this address to my profile
        </Typography>
      </Box>
      <Typography variant='h1' component='h1' sx={{ mb: 3, mt: 3 }}>
        Contact
      </Typography>
      <InputLabel
        shrink
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
        Email
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='mall@example.com'
        name='email'
        sx={{ mb: 3 }}
      />
      <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
        Phone Number
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='+966123456789'
        name='phoneNumber'
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
            width: 'auto',
            height: '44px',
            backgroundColor: ' background.grayDisabled',
            mr: '20px',
          }}
        >
          Continue shopping
        </Button>
        <Button
          variant='contained'
          sx={{ width: '219px', height: '44px' }}
          type='submit'
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
