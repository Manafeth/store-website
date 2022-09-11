import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import React, { ChangeEvent, FC, useState } from 'react';
import { useCart } from '../../../contexts/CartContext';
import { AddressData } from '../../../types/profile';
interface Props {
  data: AddressData;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;

}

const AddressCard: FC<Props> = ({ data,setIsEditMode }) => {
  const { updateCheckoutData, checkoutData } = useCart();

  function handleChange() {
    updateCheckoutData('addressId', data.id);
    setIsEditMode(true)
  }

  return (
    <Card sx={{ width: '420px', backgroundColor: 'grey.2400' }}>
      <CardContent>
        <FormControl>
          <FormControlLabel
            key={data.id}
            value={data.address}
            control={<Radio onChange={handleChange} checked={data.id === checkoutData.addressId}  />}
            label={
              <Typography sx={{ fontSize: '24px', fontweight: '600' }}>
                {data.id}
              </Typography>
            }
          />
        </FormControl>

        <Typography variant='h6' sx={{ ml: 4.5, color: 'text.secondary' }}>
          {data.address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
