import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CheckoutStepper from '../../components/CheckoutStepper';
import Grid from '@mui/material/Grid';
import CheckoutForm from '../../components/CheckoutForm';
import Typography from '@mui/material/Typography';
import CartItem from '../../components/CartItem';
import Divider from '@mui/material/Divider';
import OrderSummary from '../../components/OrderSummary';

const Checkout = () => {
  return (
    <MainLayout>
      <Box component='section'>
        <Container sx={{ px: { xs: 2, lg: 7.5 }, mt: 5 }}>
          <CheckoutStepper />
        </Container>
        <Container>
          <Grid container spacing='40px' sx={{ mt: 5 }}>
            <Grid item xs={6}>
              <CheckoutForm />
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
                Order summery
              </Typography>
              <OrderSummary />
              <Divider />
              <Typography variant='h1' component='h1' sx={{ mb: 5, mt: 5 }}>
                Items
              </Typography>
              <CartItem />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Checkout;
