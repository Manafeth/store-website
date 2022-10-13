import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListMenuText from '../../components/ListMenuText';
import {
  Cancellation,
  Commitment,
  Consumer,
  Information,
  Introduction,
  Manafeth,
  Merchant,
  Modification,
  Payment,
  Registration,
  Responsibility,
  Rules,
  Store,
} from '../../constants/statuses';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PrivacyPolicy = () => {
  const [t] = useTranslation();

  return (
    <MainLayout>
      <Container sx={{ mt: 5 }}>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('privacy:privacyPolicy')}
        </Typography>
        <Typography
          sx={{
            mb: 5,
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('privacy:privacyDescription')}
        </Typography>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('privacy:info')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Information?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('privacy:store')}
        </Typography>
        <Typography
          sx={{
            mb: 5,
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('privacy:storeDescription')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Store?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('privacy:safety')}
        </Typography>
        <Typography
          sx={{
            mb: 5,
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('privacy:saftytext')}
        </Typography>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('privacy:share')}
        </Typography>
        <Typography
          sx={{
            mb: 5,
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('privacy:shareOne')}
        </Typography>
        <Typography
          sx={{
            mb: 5,
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('privacy:shareTwo')}
        </Typography>
      </Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale &&
        (await serverSideTranslations(locale, [
          'settings',
          'common',
          'cart',
          'auth',
          'terms',
          'privacy'
        ]))),
    },
    revalidate: 10,
  };
};

export default PrivacyPolicy;
