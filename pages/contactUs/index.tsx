import React from 'react';
import ContactUsLayout from '../../layouts/ContactUsLayout';
import Image from 'next/image';
import contactUs from '../../assets/images/contact-us.svg';
import ContactUsForm from '../../components/ContactUsForm';
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

export default ContactUs;
