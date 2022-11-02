import Button from '@mui/material/Button';
import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import useTranslation from 'next-translate/useTranslation';
interface Props {
  handleNext?: () => void;
  handleBack: () => void;
}

const PaymentDetail: FC<Props> = ({ handleNext, handleBack }) => {
  const {t:COT} = useTranslation('checkout');
  const {t:CT} = useTranslation('common');
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
      {COT('paymentDetail')}
      </Typography>
      <Box
        component='label'
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
         {COT('promocode')}
      </Box>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='HappyEid2022'
        name='promocode'
        sx={{ mb: 3 }}
        InputProps={{ endAdornment: <Button>Apply</Button> }}
      />
      <Box component='label' sx={{ color: 'primary.dark', fontWeight: '500' }}>
         {COT('nameOnCard')}
      </Box>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Ahmed Shalayel'
        name='nameCard'
        sx={{ mb: 3 }}
      />
      <Box component='label' sx={{ color: 'primary.dark', fontWeight: '500' }}>
      {COT('cardNumber')}
      </Box>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='4539 - 4751 - 5213  -1989'
        name='cardNumber'
        sx={{ mb: 3 }}
      />
      <Grid container spacing='40px'>
        <Grid item xs={6}>
          <Box component='label' sx={{ color: 'primary.dark', fontWeight: '500' }}>
            MM/YY
          </Box>
          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='08/2024'
            name='firstName'
          />
        </Grid>
        <Grid item xs={6}>
          <Box component='label' sx={{ color: 'primary.dark', fontWeight: '500' }}>
            CVV
          </Box>

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
          onClick={handleBack}
        >
          {CT('back')}
        </Button>
        <Button
          variant='contained'
          sx={{ width: '219px', height: '44px' }}
          type='submit'
          onClick={handleNext}
        >
           {CT('next')}
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentDetail;
