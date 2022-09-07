import React, { FC, FormEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShippingCard from './components/ShippingCard';
import { useCartModal } from '../../contexts/CartContext';
import PaymentCard from './components/PaymentCard';

interface Props {
  title: string;
  text: string;
  handleNext: () => void;
  handleBack: () => void;
}

const Providers: FC<Props> = ({ handleNext, title, text, handleBack }) => {
  const [selectedId, setSelectedId] = useState();
  const { fetchShipmentsProviders, shipmentData, paymnetData,fetchPaymentProviders } = useCartModal();
  useEffect(() => {
    fetchShipmentsProviders(76);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchPaymentProviders(76);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  function handleClick() {
    console.log('hello');
  }

  return (
    <Box>
      <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
        {title}
      </Typography>
      <Typography variant='h4' component='h1' sx={{ mb: 2, width: '70%' }}>
        These are available {text} methods, please select suitable one for you
      </Typography>

      {shipmentData.map((item) => {
        return (
          <ShippingCard
            selectedId={selectedId}
            title='test'
            id={1}
            handleClick={handleClick}
            data={item}
            key={item.id}
          />
        );
      })}
      {paymnetData.map((item) => {
        return (
      <PaymentCard
            data={item}
            key={item.id}/>
      );
    })}
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
            width: '171px',
            height: '44px',
            backgroundColor: ' background.grayDisabled',
            mr: '20px',
            fontSize: '14px',
            fontWeight: '500',
          }}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant='contained'
          sx={{ width: '219px', height: '44px' }}
          type='submit'
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Providers;
