import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useProfile } from '../../contexts/ProfileContext';
import AddressCard from './components';
import useTranslation from 'next-translate/useTranslation';
import CircularProgress from '@mui/material/CircularProgress';
import { useCart } from '../../contexts/CartContext';
import { useCommon } from '../../contexts/CommonContext';

import addIcon from '../../assets/images/icons/add-icon.svg';
import Image from 'next/image';
import AddressDrawer from '../AddressManagment/components/AddressDrawer';
interface Props {
  handleNext: () => void;
  handleBack: () => void;
  loading?: boolean;
}

const DeliveryAddress: FC<Props> = ({ handleNext, handleBack, loading }) => {
  const { fetchAllAddressData, addressData, fetchAllCityData, fetchAllCountryData } = useProfile();
  const { checkoutData } = useCart();
  const {t: COT} = useTranslation('checkout');
  const {t: ST} = useTranslation('settings');
  const {t: CT} = useTranslation('common');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchAllAddressData();
    fetchAllCityData();
    fetchAllCountryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }
  
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
        <Typography variant='h1' component='h1'>
          {COT('deliveryAddress')}
        </Typography>
        <Button
          variant='contained'
          onClick={onOpen}
        >
          <Image src={addIcon} width='14' height='14' alt='add icon' />
        </Button>
      </Box>
        {addressData.length > 0 ? addressData.map((item) => {
          return (
            <Box key={item.id} sx={{ mb: 2 }}>
              <AddressCard
                data={item}
              />
            </Box>
          );
        }):(
          <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column', marginTop: '20px' }}>
          <Typography variant="h2" sx={{ mb: '20px', fontWeight: 'bold' }}>
          {ST('oops')}
          </Typography>
          <Typography variant="h5" sx={{ mb: '20px', fontWeight: 'bold' }}>
          {ST('noAddress')}
          </Typography>
        </Box>
        )}

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
              fontSize:'14px',
              fontWeight:'500', 
            }}
            onClick={handleBack}
            disabled
          >
              {CT('back')}
          </Button>
          <Button
            variant='contained'
            sx={{ width: '219px', height: '44px', py: loading ? '10px' : '14px',
            "&:hover": {
              backgroundColor: "primary.hover",
           }}}
            type='submit'
            onClick={handleNext}
            disabled={!checkoutData.addressId || loading}
          >
            {loading ? <CircularProgress size={25} color="info" /> :  CT('next')}
            
          </Button>
        </Box>
      </>
      <AddressDrawer
        onClose={onClose}
        open={open}
      />
    </Box>
  );
};

export default DeliveryAddress;
