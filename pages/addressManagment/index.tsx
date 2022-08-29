import React, { FormEvent, useEffect, useState } from 'react';
import AddressManagment from '../../components/AddressManagment';
import { useProfileModal } from '../../contexts/ProfileContext';
import MainLayout from '../../layouts/MainLayout';
import ProfileLayout from '../../layouts/ProfileLayout';
import Box from '@mui/material/Box';
import { addressDetailsData } from '../../types/profile';
import { LOADING, SUCCESS } from '../../constants';

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
function updateAddressData(addressDetailsData: addressDetailsData) {
  throw new Error('Function not implemented.');
}
