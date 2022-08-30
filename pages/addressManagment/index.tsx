import React, { FormEvent, useEffect, useState } from 'react';
import AddressManagment from '../../components/AddressManagment';
import MainLayout from '../../layouts/MainLayout';
import ProfileLayout from '../../layouts/ProfileLayout';
import Box from '@mui/material/Box';
import { addressData } from '../../types/profile';


const Setting = () => {
  return (
    <MainLayout>
      <ProfileLayout>
        <Box>
          <AddressManagment/>
        </Box>
      </ProfileLayout>
    </MainLayout>
  );
};

export default Setting;
function updateAddressData(addressData: addressData) {
  throw new Error('Function not implemented.');
}
