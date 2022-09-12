import React, { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ImageInput from '../../ImageInput';
import { useAuthModal } from '../../../contexts/AuthModalContext';
import { ProfileData } from '../../../types/auth';
import isEmail from 'validator/lib/isEmail';
import { useTranslation } from 'react-i18next';

interface Props {
  accountData: ProfileData,
  setAccountData: Dispatch<SetStateAction<ProfileData>>,
  isInvalid: boolean
}

const CompleteProfile: FC<Props> = ({ accountData, setAccountData, isInvalid }) => {
  const [image, setImage] = useState('')
  const { fetchAccountData, profileData } = useAuthModal();
  const [t] = useTranslation();

  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    setAccountData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value
    }))
  }

  function handleImage(ev: ChangeEvent<HTMLInputElement>) {
    if (ev.target?.files && ev.target?.files[0]) {
      const img = ev.target?.files[0];
      setAccountData((prevState) => ({
        ...prevState,
        image: img,
      }));
    }
  }

  function removeImage() {
    setAccountData((prevState) => ({
      ...prevState,
      image: null,
    }));
    setImage('');
  }

  useEffect(() => {
    fetchAccountData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setAccountData((prevState) => ({
      ...prevState,
      fullName: profileData.fullName,
      email: profileData.email,
    }));
    setImage(profileData.mainImageFilePath?.thumbUrl || '')
  }, [profileData, setAccountData])
  
  
  return (
    <Box>
      <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2, letterSpacing: '0.1px' }}>
      {t('Auth.completeProfile')}
      </Typography>

      <Typography variant='h2' sx={{ mb: 5, lineHeight: '30px', letterSpacing: '0.2px' }}>
      {t('Auth.completeYourOrders')}
      </Typography>

      <ImageInput
        text='Profile photo'
        subText='Select profile image'
        handleImage={handleImage}
        removeImage={removeImage}
        image={accountData.image ? URL.createObjectURL(accountData.image) : image}
        isInvalid={isInvalid}
      />

      <TextField
        variant='standard'
        label='Full name'
        placeholder='i.e ‘Elham Mahmoud Ahmed Ali’'
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={{ mb: 3 }}
        value={accountData.fullName}
        onChange={handleInput}
        error={isInvalid && !accountData.fullName}
        name='fullName'
      />

      <TextField
        variant='standard'
        label='Email address'
        placeholder='mail@example.com'
        InputLabelProps={{ shrink: true }}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ position: 'absolute', right: '0', top: -6 }}>
                   {t('common.optional')}
            </InputAdornment>
          ),
        }}
        sx={{ mb: 5.25 }}
        value={accountData.email}
        onChange={handleInput}
        error={isInvalid && (!!accountData.email && !isEmail(accountData.email)) }
        name='email'
      />
    </Box>
  )
}

export default CompleteProfile