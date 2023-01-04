import React, { ChangeEvent, FC } from 'react'
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ProductAttributesData, ProductByCategoryParams } from '../../../../types/products';

interface Props {
  data: ProductAttributesData,
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void,
  params: ProductByCategoryParams
}

const CheckboxFilter: FC<Props> = ({ data, onChange, params }) => {
  return (
    <Box>
      <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{color:'text.primary', fontWeight:'700',fontSize:'16px', mb: 3}}>
          {data.name}
        </FormLabel>
        <FormGroup>
        
        {data.options.map((item) => {
          return (
            <FormControlLabel
              control={
                <Checkbox checked={params.options?.includes(item.id || 0)} onChange={onChange} value={item.id} />
              }
              label={item.name}
              key={item.id} 
              sx={{fontWeight:'700',fontSize:'14px',color:'grey.2200'}}
            />
          )
        })}
        </FormGroup>
      </FormControl>
    </Box>
  )
}

export default CheckboxFilter
