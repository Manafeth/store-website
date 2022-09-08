import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaymentCard from '../PaymentCard';
import { useCartModal } from '../../../../contexts/CartContext';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import paths from '../../../../constants/paths';


interface Props {
  handleBack: () => void;
}

const PaymentProviders: FC<Props> = ({ handleBack }) => {
    const [t] = useTranslation();
  const [selectedId, setSelectedId] = useState("")
  const { paymnetData,fetchPaymentProviders } = useCartModal();


  useEffect(() => {
    fetchPaymentProviders(76);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    // setState((prevState) => ({
    //   ...prevState,
    //   [ev.target.name]: ev.target.value,
    // }));
  }

 
  function handleClick() {
    
    console.log('hello');
  }

  return (
    <Box>
      <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
      {t('checkOut.paymentProviders')}
      </Typography>
      <Typography variant='h4' component='h1' sx={{ mb: 2, width: '70%' }}>
      {t('checkOut.paymentDiscription')}
      </Typography>

      {paymnetData.map((item) => {
        return (
      <PaymentCard
            data={item}
            key={item.id}/>
      );
    })}
      <TextField
        id="outlined-basic"
        label="Promocode"
        placeholder="HappyEid2022"
        variant="outlined"
        sx={{ mb: 4, width:'420px',mt:2 }}
        onChange={handleInputChange}
        name="fullName"
        value="test"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start" sx={{ position: 'absolute', right: '0', top: '-6' }}>
               <Typography>Apply</Typography>
            </InputAdornment>
          ),
        }}
      />
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
             {t('common.back')}
        </Button>
        <Link href={paths.orderDetails(1)}>
        <Button
          variant='contained'
          sx={{ width: '219px', height: '44px' }}
          type='submit'
        >
           {t('checkOut.placeOrder')}
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PaymentProviders;
