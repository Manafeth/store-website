import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ImageInput from '../../ImageInput';

const CompleteProfile = () => {
  return (
    <Box>
      <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2, letterSpacing: '0.1px' }}>
        Complete your beuand profile
      </Typography>

      <Typography variant='h2' sx={{ mb: 5, lineHeight: '30px', letterSpacing: '0.2px' }}>
        Complete your beuand profile to be able to place orders...
      </Typography>

      <ImageInput
        text='Profile photo'
        subText='Select profile image'
      />

      <TextField
        variant='standard'
        label='Full name'
        placeholder='i.e ‘Elham Mahmoud Ahmed Ali’'
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={{ mb: 3 }}
      />

      <TextField
        variant='standard'
        label='Email address'
        placeholder='mail@example.com'
        InputLabelProps={{ shrink: true }}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ position: 'absolute', right: '0', top: -6 }}>
              Optional
            </InputAdornment>
          ),
        }}
        sx={{ mb: 5.25 }}
      />
    </Box>
  )
}

export default CompleteProfile