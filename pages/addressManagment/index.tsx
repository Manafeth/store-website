import React from 'react';
import AddressManagment from '../../components/AddressManagment';
import MainLayout from '../../layouts/MainLayout';
import ProfileLayout from '../../layouts/ProfileLayout';
import Box from '@mui/material/Box';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && await serverSideTranslations(locale, ['settings', 'common', 'cart', 'auth']))
    },
    revalidate: 10,
  }
}

export default Setting;
