import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import React, { ChangeEvent, FC, useState } from 'react';
import { AddressData } from '../../../types/profile';
interface Props {
  data: AddressData;
}

const AddressCard: FC<Props> = ({ data }) => {
  const [state, setState] = useState<AddressData>();
  const [checked, setChecked] = useState(false);

  function handleSelected(data: AddressData) {
    setState(data);
  }

  function handleClick() { 
    setChecked(!checked)
  }
 
  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setState((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
     
    }));
  }
  return (
    <Box  onClick={function () {
      handleSelected(data)
    }}>
    <Card sx={{ width: '420px', backgroundColor: 'grey.2400' }}>
      <CardContent>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue={1}
            name={data.address}
            onChange={handleChange}
          >
            <FormControlLabel
              key={data.id}
              value={data.id}
              control={<Radio checked={checked} onClick={handleClick}/>}
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
    </Box>
  );
};

export default AddressCard;
