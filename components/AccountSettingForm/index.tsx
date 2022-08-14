import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { ChangeEvent } from 'react';



const AcccoutSettingForm = () => {
  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    // setState((prevState: any) => ({
    //   ...prevState,
    //   [ev.target.name]: ev.target.value,
    // }));
    console.log(ev.target.name)
  }
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
                  variant="h1"
                  component="h1"
                  sx={{ mb: 5 }}
                >
                  Account Setting
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
          Email Notification
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
        We would like you to be first to get customized news, special offers,
        invites to events & exclusive competitions related to Beuand,
      </Typography>
      <Divider sx={{ mb: 5, width: '80%' }} />
    
      <TextField
        variant="standard"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ mb: '48px', position: 'absolute', right: '0', top: -6 }}>
              Edit
            </InputAdornment>
          ),
        }}
        label='Shipping Address'
        placeholder='Street name goes here, District name, City name, Country name, P.O12345'
        InputLabelProps={{ shrink: true,style: {fontSize: '24px', color:'#000', fontWeight: 'bold',} }}
        onChange={handleInput}
        sx={{ mb: 4 , width:'80%'}}
        name="shippingAddress"
      />
          <TextField
        variant="standard"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ mb: '48px', position: 'absolute', right: '0', top: -6 }}>
              Edit
            </InputAdornment>
          ),
        }}
        label='Payment'
        placeholder='VISA 5168 **** **** 1932'
        InputLabelProps={{ shrink: true, style: {fontSize: '24px', color:'#000', fontWeight: 'bold',}}}
        onChange={handleInput}
        sx={{ mb: 4 , width:'80%'}}
        name="Payment"
      />
      <TextField
        select
        label='Currency'
        variant='standard'
        margin='normal'
        sx={{ mb: 5, width: '80%' }}
        InputLabelProps={{ shrink: true, style: {fontSize: '24px', color:'#000', fontWeight: 'bold',}}}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position='end'
              sx={{ position: 'absolute', right: '0', top: -6, fontSize:'16px' }}
            >
              change
            </InputAdornment>
          ),
        }}
        name='currency'
      >
        <MenuItem value={0} sx={{ fontSize: '14px', fontWeight: 'bold' }}>
          test
        </MenuItem>
      </TextField>
      <Box sx={{ display: 'flex' }}>
        <Typography variant='h2' component='span' sx={{ flex: '0.75' }}>
          Language
        </Typography>
        <Typography component='span' sx={{ fontSize:'16px'}}>
          Change
        </Typography>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <FormControlLabel
          control={<Checkbox defaultChecked   color="success"/>}
          label='English'
          sx={{ flex: '0.77',color:'success.main', }}
        />
        <FormControlLabel
          control={<Checkbox color="success"/>}
          label='العربية'
          sx={{
            color:'success',
            '& .MuiSvgIcon-root': {
              borderRadius: 10,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AcccoutSettingForm;
