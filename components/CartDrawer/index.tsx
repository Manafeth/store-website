import React, { FC } from 'react';
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
import { useTranslation } from 'react-i18next';

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: FC<Props> = ({ open, onClose }) => {
  const [t] = useTranslation();
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
        <Typography variant='h1' component='h2'>
        {t('cart.myBag')} (2)
        </Typography>
        <IconButton onClick={onClose}>
          <Image src={closeIcon} alt='close icon' width='24' height='24' />
        </IconButton>
      </Box>
      <Box>
        <CartItem />
        <Divider sx={{ mt: 1, mb: 1 }} />
      </Box>

      <OrderSummary />

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          pt: 7,
          pb: 5,
        }}
      >
        <Button
          variant='contained'
          color='secondary'
          sx={{
            color: 'secondary.contrastText',
            width: 'auto',
            height: '44px',
            backgroundColor: ' background.grayDisabled',
            mr: '20px',
          }}
        >
          {t('cart.continueShopping')}
        </Button>
        <Link href='/checkout'>
          <Button
            variant='contained'
            sx={{ width: 'auto', height: '44px' }}
            type='submit'
          >
              {t('cart.continueToPayment')}
          </Button>
        </Link>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
