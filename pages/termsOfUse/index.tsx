import React, { useEffect } from 'react';
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
import { useContant } from '../../contexts/ContentContext';

const TermsOfUse = () => {
  const {t,lang} = useTranslation('terms');
  const {getContentDetails,ContantData} = useContant();
  const tagRegExp =  new RegExp('<\s*[^>]*>', 'g')
  useEffect(() => {
    getContentDetails(1);
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
          <Box dangerouslySetInnerHTML={{__html:ContantData.content}}></Box>
        </Typography>
      </Container>
    </MainLayout>
  );
};

export default TermsOfUse;
