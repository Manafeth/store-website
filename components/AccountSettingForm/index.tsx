import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

const AcccoutSettingForm = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Box
        sx={{
          pb: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant='h3' component='span' sx={{ flex: '0.75' }}>
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
      <Box>
        <Box sx={{ display: 'flex', mb:5 }}>
          <Typography variant='h3' component='span' sx={{ flex: '0.79' }}>
          Shipping Address
          </Typography>
          <Typography  component='span' sx={{ fontSize:'16px'}}>
            Edit
          </Typography>
        </Box>
        <Typography
        sx={{
          width: '76%',
          color: 'text.secondary',
          fontSize: '16px',
          mb: 5,
        }}
      >
       Street name goes here, District name, City name, Country name, P.O12345
      </Typography>
      </Box>
      
      <Divider sx={{ mb: 5, width: '80%' }} />
      <Box>
        <Box sx={{ display: 'flex', mb:5 }}>
          <Typography variant='h3' component='span' sx={{ flex: '0.79' }}>
            Payment
          </Typography>
          <Typography  component='span' sx={{ fontSize:'16px'}}>
            Edit
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{    
            lineHeight: '1.8',
            width: '56px',
            height:' 32px',
            background:'#000',
            borderRadius: '7px',
            color:'warning.contrastText',
            textAlign: 'center',}}>VISA</Box>
          <Typography sx={{mx:2}}>5168 **** **** 1932</Typography>
        </Box>
      </Box>
      <TextField
        select
        label='Currency'
        variant='standard'
        margin='normal'
        sx={{ mb: 5, width: '80%' }}
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
        <Typography variant='h3' component='span' sx={{ flex: '0.75' }}>
          Language
        </Typography>
        <Typography component='span' sx={{ fontSize:'16px'}}>
          Change
        </Typography>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='English'
          sx={{ flex: '0.77' }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label='العربية'
          sx={{
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
