import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { FC, ReactElement } from 'react';
import Typography from '@mui/material/Typography';
import OrderSummary from '../../components/OrderSummary';
import Divider from '@mui/material/Divider';
import CartItem from '../../components/CartItem';
interface Props {
  children: ReactElement;
}

const CheckoutLayout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
        <Grid container spacing='40px'>
          <Grid item xs={6}>
            {children}
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
  );
};

export default CheckoutLayout;
