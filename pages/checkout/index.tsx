import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import DeliveryAddress from '../../components/DeliveryAddress';
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
import { useCart } from '../../contexts/CartContext';
import useTranslation from 'next-translate/useTranslation';
import PaymentProviders from '../../components/Providers/PaymentProviders';
import ShippingProviders from '../../components/Providers/ShippingProviders';
import { LOADING } from '../../constants';
import AuthComponent from '../../components/AuthComponent';

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
    backgroundColor:
      theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor:
      theme.palette.primary.main,
  }),
}));
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const {fetchCartProducts,cartData,createOrderStatus } = useCart();
  const {t, lang} = useTranslation('checkout');
  const {t:CT} = useTranslation('common');

  const steps = [
    { id: 1, name: t('firstStep'), info: t('information') },
    { id: 2, name: t('secondStep'), info: t('delivery') },
    { id: 3, name: t('thirdStep'), info: t('billing') },
  ];
  
  useEffect(() => {
    fetchCartProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
 
  function handleBack() {
    setActiveStep(activeStep - 1);
  }
  
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
    <AuthComponent>
      <MainLayout>
        <Box component='section'>
          <Container maxWidth={false} sx={{ px: { xs: 2, lg: 7.5 }, mt: 5, maxWidth: 1050 }}>
          <Container maxWidth={false} sx={{ maxWidth: 800, mb: 10 }}>
            <Stepper  activeStep={activeStep}>
              {steps.map((step, index) => (
                <Step key={step.id}>
                  <StepLabel StepIconComponent={ColorlibStepIcon} color='inherit'>
                    <Box sx={{display:{ xs: 'none', sm: 'flex'},flexDirection:'column' }}>
                      <Typography variant='h3' sx={{fontWeight:'700', color:'grey.2200', fontFamily: lang === 'en' ? 'Urbanist' : ''}}>
                        {step.name} 
                       </Typography>
                      <Box sx={{textAlign:'left', fontSize:'18px',fontWeight:'700',fontFamily: lang === 'en' ? 'Urbanist' : ''}}>
                      {step.info}
                      </Box>
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            </Container>
            <Grid container spacing={{ xs: 2, md: 5 }} justifyContent='space-between'>
              <Grid item xs={12} md={5.7}>
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
                  handleBack={handleBack}
                  loading={createOrderStatus === LOADING } />
              )}
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
                  {t('orderSummery')}
                </Typography>
              
                <OrderSummary/>
          
                <Divider />
                <Typography variant='h1' component='h1' sx={{ mb: 5, mt: 5 }}>
                {CT('items')}
                </Typography>
                {cartData?.map((item, index) => {
                  return(
                  <Box key={item.id}>
                    <CartItem data={item} />
                    {index < cartData.length -1 && <Divider sx={{my: 2}}/>}
                  </Box>
                );
              })}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </MainLayout>
    </AuthComponent>
  );
};

export default Checkout;
