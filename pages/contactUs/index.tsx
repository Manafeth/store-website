import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import ContactUsLayout from '../../layouts/ContactUsLayout';
import Image from 'next/image';
import contactUs from '../../assets/images/contact-us.svg';
import ContactUsForm from '../../components/ContactUsForm';
import MainLayout from '../../layouts/MainLayout';
import { useCommon } from '../../contexts/CommonContext';

const ContactUs = () => {
  const { storeInfo } = useCommon();
  return (
    <MainLayout>
    <ContactUsLayout
      image={
        storeInfo.contactUsImagePath.orignialUrl ? (
          <CardMedia
            image={storeInfo?.contactUsImagePath?.orignialUrl || ''}
            component='img'
            alt='Contact us image'
            sx={{ maxWidth: '100%', height: 'auto' }}
          />
        ) : (
          <Image
            src={contactUs}
            width='548'
            height='335'
            alt='Auth'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )
      }
    >
      <ContactUsForm />
    </ContactUsLayout>
    </MainLayout>
  );
};

export default ContactUs;
