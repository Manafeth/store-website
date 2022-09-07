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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: FC<Props> = ({ open, onClose }) => {
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
          My bag (2)
        </Typography>
        <IconButton onClick={onClose}>
          <Image src={closeIcon} alt='close icon' width='24' height='24' />
        </IconButton>
      </Box>
      <Box>
        {/* <CartItem /> */}
        <Grid container spacing='40px' sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            select
            variant='outlined'
            label='Size : L'
            fullWidth
            margin='normal'
            name='cityId'
            sx={{ mb: 4 }}
          >
            <MenuItem value={0}>test</MenuItem>

            <MenuItem value={1}></MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            select
            variant='outlined'
            label='Qty : 1'
            fullWidth
            margin='normal'
            name='cityId'
            sx={{ mb: 4 }}
            inputProps={{ style: { fontSize: '16px', fontWeight: '700' } }}
          >
            <MenuItem value={0}>test</MenuItem>

            <MenuItem value={1}></MenuItem>
          </TextField>
        </Grid>
      </Grid>
        <Divider sx={{ mt: 3, mb: 3 }} />
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
          Continue shopping
        </Button>
        <Link href='/checkout'>
          <Button
            variant='contained'
            sx={{ width: 'auto', height: '44px' }}
            type='submit'
          >
            Continue to payment
          </Button>
        </Link>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
