import React, { ChangeEvent, FC } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ProductAttributesData } from '../../../../types/products';

interface Props {
  data: ProductAttributesData,
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void
}

const RadioButtonFilter: FC<Props> = ({ data, onChange }) => {
  return (
    <FormControl sx={{ ml: 2 }}>
      <FormLabel
        id='demo-radio-buttons-group-label'
        sx={{
          color: 'text.primary',
          fontWeight: '700',
          fontSize: '16px',
          my: 3,
        }}
      >
        {data.name}
      </FormLabel>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        name='radio-buttons-group'
      >
        {data.options.map((item) => {
          return (
            <FormControlLabel control={<Radio onChange={onChange} value={item.id} />} label={item.name} key={item.id} />
          )
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonFilter;
