import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import FormLabel from '@mui/material/FormLabel';

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
          fontSize: { xs: '14px', md: '17px' },
          fontWeight:'400',
          color: 'standard.color',
        }}
      >
        {t('contact:contactText')}
      </Typography>
      <Box>
        <InputLabel>{t('contact:yourName')}</InputLabel>
        <TextField
          id='fullWidth'
          placeholder={t('contact:enterYourName')}
          fullWidth
          sx={{ mb: 3, mt: 1 }}
          InputLabelProps={{ shrink: true }}
          type='text'
          name='name'
          InputProps={{
            inputProps: {
              sx: {
                '&::placeholder': {
                  color: 'p.color',
                  fontWeight: '400',
                  fontSize:'20px'
                },
              },
            },
          }}
        />
        <InputLabel>{t('contact:contactEmail')}</InputLabel>
        <TextField
          id='fullWidth'
          placeholder={t('contact:enterYourEmail')}
          fullWidth
          sx={{ mb: 3, mt: 1 }}
          InputLabelProps={{ shrink: true }}
          type='email'
          name='email'
          InputProps={{
            inputProps: {
              sx: {
                '&::placeholder': {
                  color: 'p.color',
                  fontWeight: '400',
                  fontSize:'20px'
                },
              },
            },
          }}
        />
        <FormLabel>{t('contact:message')}</FormLabel>
        <Box sx={{
            'textarea': {
              width: '100%', marginTop:'16px',fontSize:'18px',fontWeight:'400',
              color:'p.color',paddingLeft:'10px',
              paddingTop:'10px',
              borderRadius: 1,
              borderColor: '#c4c4c4'
            },
            'textarea::placeholder': {
              color: '#afb1b9'
            },
            'textarea:focus-visible': {
              outline: '0',
              borderColor: 'primary.main'
            }
          }}
        >
         <TextareaAutosize
            aria-label='empty textarea'
            minRows={8}
            placeholder={t('contact:messageText')}
          /> 
        </Box>
        
        <Box sx={{mt:3,textAlign:'center',mb:5}}>
          <Button
          variant='contained'
          color='primary'
          sx={{
            width: '311px',
            height: '72px',
            borderRadius:'12px',
            fontSize: { xs: '12px', md: '25px' },
            fontWeight:'500',
            textTransform: 'lowercase',
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
