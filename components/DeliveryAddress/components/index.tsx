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
import Button from '@mui/material/Button';
import useTranslation from 'next-translate/useTranslation';
import { addressTagsEnums } from '../../../constants/statuses';
import { useCommon } from '../../../contexts/CommonContext';
interface Props {
  data: AddressData;
}

const AddressCard: FC<Props> = ({ data }) => {
  const { updateCheckoutData, checkoutData } = useCart();
  const { storeInfo } = useCommon();
  const {t} = useTranslation('common');

  function handleChange() {
    updateCheckoutData('addressId', data.id);
  }

  return (
    <Card sx={{ width: '100%', backgroundColor: storeInfo.categoryCardColor || 'grey.2400' }}>
      <CardContent>
        <FormControl>
          <FormControlLabel
            key={data.id}
            value={data.address}
            control={<Radio onChange={handleChange} checked={data.id === checkoutData.addressId}  />}
            label={
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2}}>
              {addressTagsEnums.map((item) => {
                if(item.value === data.type )
                return (
                  <Box
                    key={item.value}>
                    {t(item.label)}
                  </Box>
                )
              })}
            </Box>
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
