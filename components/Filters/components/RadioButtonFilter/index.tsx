import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtonFilter = () => {
  return (
    <FormControl>
      <FormLabel
        id='demo-radio-buttons-group-label'
        sx={{
          color: 'text.primary',
          fontWeight: '700',
          fontSize: '16px',
          m: 3,
        }}
      >
        Category
      </FormLabel>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='male'
        name='radio-buttons-group'
        sx={{ alignItems: 'center' }}
      >
        <FormControlLabel value='fema' control={<Radio />} label='Feme' />
        <FormControlLabel value='male' control={<Radio />} label='Male' />
        <FormControlLabel value='other' control={<Radio />} label='Othe' />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonFilter;
