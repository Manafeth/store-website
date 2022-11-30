import React, { FC, useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import closeIcon from '../../assets/images/icons/close-icon.png';
import CartItem from '../CartItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import OrderSummary from '../OrderSummary';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useTranslation from 'next-translate/useTranslation';
import { useCart } from '../../contexts/CartContext';
import Container from '@mui/material/Container';
import { useCommon } from '../../contexts/CommonContext';

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: FC<Props> = ({ open, onClose }) => {
  const {t} = useTranslation('cart');
  const { fetchCartProducts, cartData } = useCart();
  const { storeInfo } = useCommon()
  useEffect(() => {
    if (open)
      fetchCartProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleClose() {
    onClose();
  }


  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { width: { xs: '100%', md: '700px' }, px: { xs: 3, sm: 4, lg: 6 } },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: '40px',
          pb: 7,
        }}
      >
        <Box sx={{display:'flex', alignItems:'baseline', gap:1}}>
        <Typography variant='h1' component='h2' sx={{ fontFamily: 'Urbanist'}}>
        {t('myBag')} 
        </Typography>
        <Box sx={{fontSize:'25px', fontWeight:'700', fontFamily: 'Urbanist'}}>({cartData.length})</Box>
        </Box>
        <IconButton onClick={onClose}>
          <Image src={closeIcon} alt='close icon' width='24' height='24' />
        </IconButton>
      </Box>
      <Box>
      {cartData?.map((item) => {
        return(
          <Box key={item.id}>
            <CartItem data={item} key={item.id} isDrawerItem />
            <Divider sx={{ mt: 3, mb: 3 }} />
          </Box>
        );
      })}
        
      </Box>
      <Box sx={{width:'60%'}}>
      <OrderSummary />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          pt: 7,
          pb: 5,
        }}
      >
         <Link href='/'>
        <Button
          variant='contained'
          color='secondary'
          sx={{
            color: storeInfo.buttonTitelColor,
            width: 'auto',
            height: '44px',
            backgroundColor: 'secondary.main',
            mr: '20px',
            textTransform: 'lowercase'
          }}
          onClick={handleClose}
        >
          {t('continueShopping')}
        </Button>
        </Link>
        {cartData.length > 0 ? (
          <Link href='/checkout'>
            <Button
              variant='contained'
              sx={{ width: 'auto', height: '44px',textTransform: 'lowercase',
              "&:hover": {
                backgroundColor: "primary.hover",
             }}}
              type='submit'
            >
                {t('continueToPayment')}
            </Button>
          </Link>
        ) : (
          <Button
            variant='contained'
            sx={{ width: 'auto', height: '44px',textTransform: 'lowercase',color: storeInfo.buttonTitelColor, }}
            disabled
          >
              {t('continueToPayment')}
          </Button>
        )}
        
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
