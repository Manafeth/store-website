import React, { useEffect, useState } from 'react';
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
import Box from '@mui/material/Box';

const PrivacyPolicy = () => {
  const {t, lang} = useTranslation('privacy');
  const [html, setHTML] = useState({__html: ""});
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
          <Box dangerouslySetInnerHTML={{__html:ContantData.content}}></Box>  
        </Typography>
      </Container>
    </MainLayout>
  );
};

export default PrivacyPolicy;
