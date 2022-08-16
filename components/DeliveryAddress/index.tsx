import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const DeliveryAddress: FC<Props> = ({ handleNext, handleBack }) => {
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
        Delivery address
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h1' component='h1' sx={{ mb: 5, flex: '.75' }}>
          Home
        </Typography>
        <Typography
          variant='h5'
          component='h1'
          sx={{ mb: 5, fontWeight: '600' }}
        >
          Edit
        </Typography>
      </Box>

      <TextField
        variant='standard'
        fullWidth
        placeholder='Ahmed Shalayel'
        InputLabelProps={{
          shrink: true,
          style: { fontSize: '24px', color: '#000', fontWeight: 'bold' },
        }}
        sx={{ mb: 4, width: '80%' }}
        name='shippingAddress'
      />
      <TextField
        variant='standard'
        fullWidth
        placeholder='As Sahafah, Olaya St. 6531, 3059 Riyadh 13321 Saudi Arabia'
        InputLabelProps={{
          shrink: true,
          style: { fontSize: '24px', color: '#000', fontWeight: 'bold' },
        }}
        sx={{ mb: 4, width: '80%' }}
        name='address'
      />
      <TextField
        variant='standard'
        fullWidth
        placeholder='mail@example.com'
        InputLabelProps={{
          shrink: true,
          style: { fontSize: '24px', color: '#000', fontWeight: 'bold' },
        }}
        sx={{ mb: 4, width: '80%' }}
        name='email'
      />
      <TextField
        variant='standard'
        fullWidth
        placeholder='+966123456789'
        InputLabelProps={{
          shrink: true,
          style: { fontSize: '24px', color: '#000', fontWeight: 'bold' },
        }}
        sx={{ mb: 4, width: '80%' }}
        name='email'
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
            width: '171px',
            height: '44px',
            backgroundColor: ' background.grayDisabled',
            mr: '20px',
          }}
          onClick={handleBack}
        >
          Back
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

export default DeliveryAddress;
