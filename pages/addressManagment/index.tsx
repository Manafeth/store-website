import React from 'react';
import AddressManagment from '../../components/AddressManagment';
import MainLayout from '../../layouts/MainLayout';
import ProfileLayout from '../../layouts/ProfileLayout';
import Box from '@mui/material/Box';

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
