import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
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
  const {t} = useTranslation('terms');

  return (
    <MainLayout>
      <Container sx={{ mt: 5 }}>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('termsOfService')}
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
          {t('termsDescription')}
        </Typography>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('introduction')}
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
          {t('merchant')}
        </Typography>
        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('merchantDescription')}
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
          {t('commitment')}
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
          {t('rules')}
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
          {t('registration')}
        </Typography>
        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('regDescription')}
        </Typography>
        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('regDescriptionTwo')}
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
          {t('modification')}
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
          {t('payment')}
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
          {t('manafeth')}
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
          {t('consumer')}
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
          {t('responsibility')}
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
          {t('cancellation')}
        </Typography>
        <Typography
          sx={{
            mt: 5,
            fontSize: { xs: '14px', md: '20px' },
            color: 'grey.800',
            textAlign: 'justify',
          }}
        >
          {t('cancellationDescription')}
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
          {t('termsText')}
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
            {t('notRightNow')}
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
            {t('agree')}
          </Button>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default TermsOfUse;
