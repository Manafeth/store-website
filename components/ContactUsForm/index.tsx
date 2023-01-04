import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import LoadingButton from '@mui/lab/LoadingButton';
import useTranslation from 'next-translate/useTranslation';
import { useContactUs } from '../../contexts/ContactUs';
import { LOADING, SUCCESS } from '../../constants';
import { ContactUsData } from '../../types/contactUs';
import { useCommon } from '../../contexts/CommonContext';
import isEmail from 'validator/lib/isEmail';
import FormLabel from '@mui/material/FormLabel';

const ContactUsForm = () => {
  const {t} = useTranslation('contact');

  const initialState = {
    name: '',
    email: '',
    message: '',
  }

  const [state, setState] = useState<ContactUsData>({
    ...initialState,
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


  useEffect(() => {
    if (createLoader === SUCCESS) {
      setState((prevState) => ({
        ...prevState,
        ...initialState,
      }))
    }
  }, [createLoader])
  
  

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant='h1'
        component='h1'
        sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' }, textAlign: 'left' }}
      >
        {t('contactUs')}
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
        {t('contactText')}
      </Typography>
      <Box component='form' onSubmit={handleSubmit}>
        <FormLabel>{t('yourName')}</FormLabel>
        <TextField
          id='fullWidth'
          placeholder={t('enterYourName')}
          fullWidth
          sx={{ mb: 3, mt: 1, backgroundColor:'background.grey' }}
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
          value={state.name}
        />
        <InputLabel>{t('contactEmail')}</InputLabel>
        <TextField
          id='fullWidth'
          placeholder={t('enterYourEmail')}
          fullWidth
          sx={{ mb: 3, mt: 1, backgroundColor:'background.grey' }}
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
          value={state.email}
        />
        <FormLabel>{t('message')}</FormLabel>
        <Box sx={{
            'textarea': {
              width: '100%', marginTop:'16px',fontSize:'18px',fontWeight:'400',
              color:'p.color',paddingLeft:'10px',
              paddingTop:'10px',
              borderRadius: 1,
              borderColor: isInvalid && !state.message ? 'error.main' : '#00000023',
            },
            'textarea::placeholder': {
              color: 'grey.2800'
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
            placeholder={t('messageText')}
            name='message'
            onChange={handleInputChange}
            value={state.message}
            style={{ backgroundColor:'background.grey' }}
          /> 
        </Box>
        
        <Box sx={{mt:3,textAlign:'center',mb:5}}>
          <LoadingButton
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
          loading={createLoader === LOADING}
          type='submit'
        >
          {t('submit')}
        </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};



export default ContactUsForm;
