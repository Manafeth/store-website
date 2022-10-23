import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ProductByCategoryParams } from '../../../../types/products'
import { useTranslation } from "next-i18next";

interface Props {
  handlePriceFromInput: (_:number) => void,
  handlePriceToInput: (_:number) => void,
  params: ProductByCategoryParams
}

const FilterByPrice: FC<Props> = ({ params, handlePriceFromInput, handlePriceToInput }) => {
  const [t] = useTranslation();
  
  function handleSliderChange (event: Event, newValue: number | number[]) {
    // @ts-ignore
    const [priceFrom, priceTo] = newValue;
    
    handlePriceFromInput(priceFrom)
    handlePriceToInput(priceTo)
  };

  function handlePriceFrom (event: React.ChangeEvent<HTMLInputElement>) {
    handlePriceFromInput(Number(event.target.value));
  };

  function handlePriceTo (event: React.ChangeEvent<HTMLInputElement>) {
    handlePriceToInput(Number(event.target.value));
  };
function valuetext(value: number) {
  return `${value}°C`;
}

  return (
    <Box ml={2}>
      <Typography
        variant='h6'
        component='h1'
        sx={{ color:'text.primary', fontWeight:'700', fontSize:'16px'}}
      >
         {t('common:filterByPrice')}
      </Typography>
      <Box sx={{ width: 150 }}>
        <Slider
          getAriaLabel={() => 'Temperature'}
          getAriaValueText={valuetext}
          defaultValue={[params.priceFrom || 0, params.priceTo || 0]}
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
          value={[params.priceFrom || 0, params.priceTo || 0]}
          max={1000}
        />
        <Box sx={{display:'flex', gap:'5px', mb:1}}>
          <TextField 
            id="outlined-basic"
            value={params.priceFrom}
            size="small"
            onChange={handlePriceFrom}
            inputProps={{
              step: 100,
              min: 0,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          <Box width={350}>
          <TextField 
            id="outlined-basic"
            value={params.priceTo}
            size="small"
            onChange={handlePriceTo}
            inputProps={{
              step: 10,
              max: 1000,
              type: 'number',
              'aria-labelledby': 'input-slider',
              sx: {
                '&::muiltr-1n69e1z-MuiInputBase-input-MuiOutlinedInput-input': {
                  padding:'8.5px 20px'
                }
              }
            }}
          />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FilterByPrice
