import React from 'react';
import ContactUsLayout from '../../layouts/ContactUsLayout';
import Image from 'next/image';
import contactUs from '../../assets/images/contact-us.svg';
import ContactUsForm from '../../components/ContactUsForm';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../../layouts/MainLayout';

const ContactUs = () => {
  return (
    <MainLayout>
    <ContactUsLayout
      image={
        <Image
          src={contactUs}
          width='548'
          height='335'
          alt='Auth'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      }
    >
      <ContactUsForm />
    </ContactUsLayout>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && await serverSideTranslations(locale, ['settings', 'common', 'cart', 'auth','contact']))
    },
    revalidate: 10,
  }
}


export default ContactUs;
