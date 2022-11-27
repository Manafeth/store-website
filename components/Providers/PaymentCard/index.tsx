import React, { FC } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { PaymentProvidersData } from '../../../types/cart';
import Avatar from '@mui/material/Avatar';
import { useCart } from '../../../contexts/CartContext';

interface Props {
    data: PaymentProvidersData;
  }

const PaymentCard: FC<Props> = ({ data }) => {
  const { updateCheckoutData, checkoutData, isTappyEnabled } = useCart();
  const disabled = data.providerCategory === 4 ? !isTappyEnabled : false
  function handleClick() {
    if (!disabled) {
      updateCheckoutData('paymentProviderId', data.id);
    }
  }

  return (
    <Box
      onClick={handleClick}
      sx={{ opacity: disabled ? 0.5 : 1 }}
    >
      <Card sx={{width: '100%', mb:3, backgroundColor: data.id === checkoutData.paymentProviderId ? '#F3F3F3': null}}>
        <CardActionArea disabled={disabled}>
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