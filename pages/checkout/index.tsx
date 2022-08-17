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
import InfoIcon from'../../assets/images/icons/info-icon.svg';
import SendIcon from'../../assets/images/icons/send-icon.svg';
import CreditIcon from'../../assets/images/icons/credit-icon.svg';
import DollarIcon from'../../assets/images/icons/dollar-icon.svg';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import Image from 'next/image';
import { styled } from '@mui/material/styles';


const steps = [
{id:1, name:'FIRST STEP',info:'Information'},
{id:2, name:'SECOND STEP',info:'Delivery'},
{id:3, name:'THIRD STEP',info:'Billing'},
{id:4, name:'FOURTH STEP',info:'Payment'},
];
const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(0,0,0) 0%, rgb(0,0,0) 50%, rgb(0,0,0) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(0,0,0) 0%, rgb(0,0,0) 50%, rgb(0,0,0) 100%)',
  }),
}));
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
  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
  
    const icons: { [index: string]: React.ReactElement } = {
      1: <Image src={InfoIcon} alt='info icon' />,
      2: <Image src={SendIcon} alt='send icon' />,
      3: <Image src={CreditIcon} alt='Arrow right' />,
      4: <Image src={DollarIcon} alt='Arrow right' />,
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
    );
  }
  return (
    <MainLayout>
      <Box component='section'>
        <Container sx={{ px: { xs: 2, lg: 7.5 }, mt: 5 }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((step, index) => (
              <Step key={step.id}>
                <StepLabel StepIconComponent={ColorlibStepIcon} color='inherit' onClick={handleStep(index)}>
                  <Box sx={{display:'flex',flexDirection:'column'}}>
                {step.name} 
                  <Box sx={{textAlign:'left'}}>
                  {step.info}
                  </Box>
                  </Box>
                </StepLabel>
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
