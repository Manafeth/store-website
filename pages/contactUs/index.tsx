import React from 'react';
import ContactUsLayout from '../../layouts/ContactUsLayout';
import Image from 'next/image';
import contactUs from '../../assets/images/contact-us.svg';
import ContactUsForm from '../../components/ContactUsForm';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactUs = () => {
  return (
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
