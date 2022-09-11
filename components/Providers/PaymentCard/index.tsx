import React, { FC } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { paymentProvidersData, shipmentsProvidersData } from '../../../types/cart';
import Avatar from '@mui/material/Avatar';
import { useCart } from '../../../contexts/CartContext';

interface Props {
    data:paymentProvidersData;
  }

const PaymentCard: FC<Props> = ({ data }) => {
  const { updateCheckoutData, checkoutData } = useCart();

  function handleClick() {
    updateCheckoutData('paymentProviderId', data.id)
  }

  console.log('checkoutData', checkoutData)

  return (
    <Box
      onClick={handleClick}
    >
      <Card sx={{width:'420px', mb:3, backgroundColor: data.id === checkoutData.paymentProviderId ? '#F3F3F3': null}}>
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
    </Box>
  )
}

export default PaymentCard