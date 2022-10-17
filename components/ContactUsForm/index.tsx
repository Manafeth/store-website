import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';

const ContactUsForm = () => {
  const [t] = useTranslation();
  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant='h1'
        component='h1'
        sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' }, textAlign: 'left' }}
      >
        {t('contact:contactUs')}
      </Typography>
      <Typography
        sx={{
          mb: 5,
          mt: 5,
          fontSize: { xs: '14px', md: '20px' },
          color: 'grey.800',
        }}
      >
        {t('contact:contactText')}
      </Typography>
      <Box>
        <FormLabel>{t('contact:yourName')}</FormLabel>
        <TextField
          id='fullWidth'
          placeholder={t('contact:enterYourName')}
          fullWidth
          sx={{ mb: 2, mt: 2 }}
          InputLabelProps={{ shrink: true }}
          type='text'
          name='name'
          InputProps={{
            inputProps: {
              sx: {
                '&::placeholder': {
                  color: 'p.color',
                  fontWeight: '400',
                },
              },
            },
          }}
        />
        <FormLabel>{t('contact:contactEmail')}</FormLabel>
        <TextField
          id='fullWidth'
          placeholder={t('contact:enterYourEmail')}
          fullWidth
          sx={{ mb: 2, mt: 2 }}
          InputLabelProps={{ shrink: true }}
          type='email'
          name='email'
          InputProps={{
            inputProps: {
              sx: {
                '&::placeholder': {
                  color: 'p.color',
                  fontWeight: '400',
                },
              },
            },
          }}
        />
        <FormLabel>{t('contact:message')}</FormLabel>
        <TextareaAutosize
          aria-label='minimum height'
          minRows={8}
          placeholder={t('contact:messageText')}
          style={{ width: '100%', marginTop:'16px', color:'#b2b2b2',fontWeight:'400',fontSize:'18px' }}
        />
        <Box sx={{mt:3,textAlign:'center',mb:5}}>
          <Button
          variant='contained'
          color='primary'
          sx={{
            py: '11px',
            width: '311px',
            height: '72px',
            fontSize: { xs: '12px', md: '14px' },
          }}
        >
          {t('contact:submit')}
        </Button>
        </Box>
      </Box>
    </Container>
  );
};



export default ContactUsForm;
