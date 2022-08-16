import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CheckoutStepper from "../../components/CheckoutStepper";
import CheckoutLayout from "../../layouts/CheckoutLayout";
import CheckoutForm from "../../components/CheckoutForm";

const Checkout = () => {
  return (
    <MainLayout>
      <Box component="section">
        <Container sx={{ px: { xs: 2, lg: 7.5 }, mt: 5 }}>
          <CheckoutStepper />
        </Container>
        <Container>
          <CheckoutLayout>
            <CheckoutForm />
          </CheckoutLayout>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Checkout;
