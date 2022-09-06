import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import React, { FC, useState } from 'react';
import { addressData } from '../../../types/profile';
interface Props {
  data: addressData;
}

const AddressCard: FC<Props> = ({ data }) => {
  const [state, setState] = useState<addressData>();
  function handleInputChange(ev: any) {
    // setState((prevState) => ({
    //   ...prevState,
    //   [ev.target.name]: ev.target.value,
    // }));
  }
  function handleChange(e: any) {
    setState((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <Card sx={{ width: '420px', backgroundColor: 'grey.2400' }}>
      <CardContent>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue={1}
            name={data.address}
            onChange={handleChange}
            value={data.address}
          >
            <FormControlLabel
              key={data.id}
              value={data.address}
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: '24px', fontweight: '600' }}>
                  {data.id}
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>

        <Typography variant='h6' sx={{ ml: 4.5, color: 'text.secondary' }}>
          {data.address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
