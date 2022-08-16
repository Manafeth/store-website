import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CheckoutLayout from '../../layouts/CheckoutLayout';
import CheckoutForm from '../../components/CheckoutForm';
import DeliveryAddress from '../../components/DeliveryAddress';
import PaymentDetail from '../../components/PaymentDetail';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

const steps = ['FIRST STEP', 'SECOND STEP', 'THIRD STEP', 'FOURTH STEP'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  function handleBack() {
    setActiveStep(activeStep - 1);
  }
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  function handleNext() {
    setActiveStep(activeStep + 1);
  }
  return (
    <MainLayout>
      <Box component='section'>
        <Container sx={{ px: { xs: 2, lg: 7.5 }, mt: 5 }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton color='inherit' onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <CheckoutLayout>
              <CheckoutForm handleNext={handleNext} />
            </CheckoutLayout>
          )}

          {activeStep === 1 && (
            <CheckoutLayout>
              <DeliveryAddress
                handleNext={handleNext}
                handleBack={handleBack}
              />
            </CheckoutLayout>
          )}

          {activeStep === 2 && (
            <CheckoutLayout>
              <PaymentDetail handleNext={handleNext} handleBack={handleBack} />
            </CheckoutLayout>
          )}

          {activeStep === 3 && (
            <CheckoutLayout>
              <PaymentDetail handleNext={handleNext} handleBack={handleBack} />
            </CheckoutLayout>
          )}
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Checkout;
