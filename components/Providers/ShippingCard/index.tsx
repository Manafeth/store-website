import React, { FC } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { ShipmentsProvidersData } from '../../../types/cart';
import Avatar from '@mui/material/Avatar';
import { useCart } from '../../../contexts/CartContext';

interface Props {
    data: ShipmentsProvidersData;
  }

const ShippingCard: FC<Props> = ({  data }) => {
  const { checkoutData, updateCheckoutData } = useCart();

  function handleClick() {
    updateCheckoutData('shipmentProviderId', data.id);
  }

  return (
    <Card sx={{ width: '100%', backgroundColor: data.id === checkoutData.shipmentProviderId ? '#F3F3F3': null, mb: 3 }} onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <Box sx={{display:'flex', gap:'20px'}}>
          <Avatar src={data.imageFilePath?.orignialUrl || ''} alt='category' sx={{ width: '60px', height: '33px', borderRadius: '2px' }}>
                  C
          </Avatar>
              <Typography>{data.name}</Typography>
          </Box>
        
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ShippingCard