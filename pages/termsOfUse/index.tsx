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
  Introduction,
  Manafeth,
  Merchant,
  Modification,
  Payment,
  Registration,
  Responsibility,
  Rules,
} from '../../constants/statuses';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const TermsOfUse = () => {
  const [t] = useTranslation();

  return (
    <MainLayout>
      <Container sx={{ mt: 5 }}>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('terms:termsOfService')}
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
          {t('terms:termsDescription')}
        </Typography>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:introduction')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Introduction?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:merchant')}
        </Typography>
        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('terms:merchantDescription')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Merchant?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:commitment')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Commitment?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:rules')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Rules?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:registration')}
        </Typography>
        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('terms:regDescription')}
        </Typography>
        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('terms:regDescriptionTwo')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Registration?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:modification')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Modification?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:payment')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Payment?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:manafeth')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Manafeth?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:consumer')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Consumer?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:responsibility')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Responsibility?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('terms:cancellation')}
        </Typography>
        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('terms:cancellationDescription')}
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {Cancellation?.map((item) => (
            <ListMenuText data={item} key={item.id} />
          ))}
        </List>
        <Typography
          sx={{
            mt: 4,
            fontSize: { xs: '14px', md: '24px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('terms:termsText')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'space-between', sm: 'flex-start' },
            pt: 7,
            pb: 5,
          }}
        >
          <Button
            variant='outlined'
            color='secondary'
            sx={{
              color: 'secondary.contrastText',
              width: '220px',
              height: '54px',
              mr: '20px',
            }}
          >
            {t('terms:notRightNow')}
          </Button>
          <Button
            variant='contained'
            sx={{
              width: '220px',
              height: '54px',
              "&:hover": {
               backgroundColor: "primary.hover",
            }
            }}
            type='submit'
          >
            {t('terms:agree')}
          </Button>
        </Box>
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
        ]))),
    },
    revalidate: 10,
  };
};

export default TermsOfUse;
