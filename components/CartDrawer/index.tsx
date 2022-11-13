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
import useTranslation from 'next-translate/useTranslation';
import { useCart } from '../../contexts/CartContext';
import LoadingButton from '@mui/lab/LoadingButton';
import { editCartProductsQuantity } from '../../services/cart.services';
import { useRouter } from 'next/router';
import paths from '../../constants/paths';

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: FC<Props> = ({ open, onClose }) => {
  const {t} = useTranslation('cart');
  const { fetchCartProducts, cartData } = useCart();
  const [cartItems, setcartItems] = useState<{cartProductId: number, quantity: number}[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (open)
      fetchCartProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleClose() {
    onClose();
  }

  function handleCartItemQuantity(cartProduct: {cartProductId: number, quantity: number}) {
    setcartItems((prevState) => {
      const selectedItem = prevState?.find(({ cartProductId }) => cartProductId === cartProduct.cartProductId)
      if (selectedItem) {
        return prevState?.map((item) => {
          if(item.cartProductId === cartProduct.cartProductId) {
            return cartProduct
          } 
          return item
        })
      } else {
        return [
          ...(prevState || []),
          cartProduct
        ]
      }
    })
  }

  function handleCheckout() {
    editCartProductsQuantity(cartItems).then(() => {
      router.push(paths.checkout)
    })
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
            <CartItem data={item} handleCartItemQuantity={handleCartItemQuantity} quantity={cartItems?.find((quantity) => quantity.cartProductId === item.productId)?.quantity} />
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
            color: 'primary.main',
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
        <LoadingButton
          variant='contained'
          sx={{ width: 'auto', height: '44px',textTransform: 'lowercase',
          "&:hover": {
            backgroundColor: "primary.hover",
          }}}
          disabled={cartData.length === 0}
          onClick={handleCheckout}
        >
            {t('continueToPayment')}
        </LoadingButton>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
