import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useContant } from '../../contexts/ContentContext';

const RefundPolicy = () => {
  const {t,lang} = useTranslation('common');
  const {getContentDetails,ContantData} = useContant();
  useEffect(() => {
    getContentDetails(4);
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
          {t('refundPolicy')}
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

export default RefundPolicy;
