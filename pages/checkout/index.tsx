import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import CheckoutForm from '../../components/CheckoutForm';
import DeliveryAddress from '../../components/DeliveryAddress';
import PaymentDetail from '../../components/PaymentDetail';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import TruckIcon from'../../assets/images/icons/truck-icon.svg';
import SendIcon from'../../assets/images/icons/send-icon.svg';
import CreditIcon from'../../assets/images/icons/credit-icon.svg';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import { useCartModal } from '../../contexts/CartContext';
import PaymentProviders from '../../components/Providers/components/PaymentProviders';
import ShippingProviders from '../../components/Providers/components/ShippingProviders';


const steps = [
  {id:1, name:'FIRST STEP',info:'Information'},
  {id:2, name:'SECOND STEP',info:'Delivery'},
  {id:3, name:'THIRD STEP',info:'Billing'},
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
  const {fetchCartProducts,cartData } = useCartModal();
  useEffect(() => {
    fetchCartProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      1: <Image src={SendIcon} alt='send icon' />,
      2: <Image src={TruckIcon} alt='truck icon' />,
      3: <Image src={CreditIcon} alt='Arrow right' />
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
        <Container maxWidth={false} sx={{ maxWidth: 800 }}>
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
          </Container>
          <Grid container spacing='40px' mt={5}>
            <Grid item xs={8}>
            {activeStep === 0 && (
               <DeliveryAddress
               handleNext={handleNext}
               handleBack={handleBack}
             />
               
            )}

            {activeStep === 1 && (
              <ShippingProviders
                handleNext={handleNext}
                handleBack={handleBack} />
            )}

            {activeStep === 2 && (
                <PaymentProviders
                handleNext={handleNext}
                handleBack={handleBack} />
            )}
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
                Order summery
              </Typography>
             
              <OrderSummary/>
         
              <Divider />
              <Typography variant='h1' component='h1' sx={{ mb: 5, mt: 5 }}>
                Items
              </Typography>
              {cartData?.map((item) => {
                 return(
              <CartItem data={item} key={item.id}/>
              );
            })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Checkout;
