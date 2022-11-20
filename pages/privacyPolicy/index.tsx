import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListMenuText from '../../components/ListMenuText';
import {
  Information,
  Store,
} from '../../constants/statuses';
import { useContant } from '../../contexts/ContentContext';

const PrivacyPolicy = () => {
  const {t, lang} = useTranslation('privacy');
  const {getContentDetails,ContantData} = useContant();
  useEffect(() => {
    getContentDetails(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[lang]);

  return (
    <MainLayout>
      <Container sx={{ mt: 5 }}>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('privacyPolicy')}
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
          {ContantData.content}
        </Typography>
        {/* <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '32px' } }}
        >
          {t('info')}
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
          {t('store')}
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
          {t('storeDescription')}
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
          {t('safety')}
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
          {t('saftytext')}
        </Typography>
        <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('share')}
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
          {t('shareOne')}
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
          {t('shareTwo')}
        </Typography> */}
      </Container>
    </MainLayout>
  );
};

export default PrivacyPolicy;
