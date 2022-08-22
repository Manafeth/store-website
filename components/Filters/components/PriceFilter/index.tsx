import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

const FilterByPrice = () => {
    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        30,
      );
    
      const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
      };
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
      };
    
    
  return (
    <Box>
    <Typography
          variant='h6'
          component='h1'
          sx={{ color:'text.primary', fontWeight:'700',fontSize:'16px' }}
        >
            Filter By Price
        </Typography>
        <Box sx={{ width: 150 }}>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
          <Box sx={{display:'flex', gap:'10px', mb:1}}>
          <TextField 
            id="outlined-basic"
            value={value}
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              min: 0,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          <TextField 
            id="outlined-basic"
            value={value}
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          </Box>
    </Box>
       <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          pt: 1,
        }}
      >
        <Button variant='contained' sx={{  width: '154px',
            height: '44px',}} type='submit'>
          Filter
        </Button>
      </Box>
       </Box>
  )
}

export default FilterByPrice
