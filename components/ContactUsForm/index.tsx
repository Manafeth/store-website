import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'next-i18next';
import { useContactUs } from '../../contexts/ContactUs';
import { LOADING } from '../../constants';
import { ContactUsData } from '../../types/contactUs';
import { useCommon } from '../../contexts/CommonContext';
import isEmail from 'validator/lib/isEmail';

const ContactUsForm = () => {
  const [t] = useTranslation();
  const [state, setState] = useState<ContactUsData>({
    name: '',
    email: '',
    message: '',
    storeId: 0
  });
  const [isInvalid, setIsInvalid] = useState(false);
  const {createLoader, createContactFunction} = useContactUs();
  const {storeInfo, fetchStoreInfo} = useCommon()
  
  function handleInputChange(ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setState((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value
    }))
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (!state.name || !state.email || !state.message || !isEmail(state.email)) {
      setIsInvalid(true);
    } else {
      createContactFunction(state)
    }
  }

  useEffect(() => {
    fetchStoreInfo();
  }, [])
  

  useEffect(() => {
    if (storeInfo?.id) {
      setState((prevState) => ({
        ...prevState,
        storeId: storeInfo.id || 0
      }))
    }
  }, [storeInfo])
  

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
      <Box component='form' onSubmit={handleSubmit}>
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
                  fontSize:'20px'
                },
              },
            },
          }}
          error={isInvalid && !state.name}
          onChange={handleInputChange}
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
                  fontSize:'20px'
                },
              },
            },
          }}
          error={isInvalid && (!state.email || !isEmail(state.email))}
          onChange={handleInputChange}
        />
        <FormLabel>{t('contact:message')}</FormLabel>
        <Box sx={{
            'textarea': {
              width: '100%', marginTop:'16px',fontSize:'18px',fontWeight:'400',
              color:'p.color',paddingLeft:'10px',
              paddingTop:'10px',
              borderRadius: 1,
              borderColor: isInvalid && !state.message ? 'error.main' : '#c4c4c4',
            },
            'textarea::placeholder': {
              color: '#afb1b9'
            },
            'textarea:focus-visible': {
              outline: '0',
              borderColor: isInvalid && !state.message ? 'error.main' : 'primary.main',
            }
          }}
        >
         <TextareaAutosize
            aria-label='empty textarea'
            minRows={8}
            placeholder={t('contact:messageText')}
            name='message'
            onChange={handleInputChange}
          /> 
        </Box>
        
        <Box sx={{mt:3,textAlign:'center',mb:5}}>
          <LoadingButton
          variant='contained'
          color='primary'
          sx={{
            py: '2px',
            width: '311px',
            height: '72px',
            borderRadius:'12px',
            fontSize: { xs: '12px', md: '25px' },
            fontWeight:'500'
          }}
          loading={createLoader === LOADING}
          type='submit'
        >
          {t('contact:submit')}
        </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};



export default ContactUsForm;
