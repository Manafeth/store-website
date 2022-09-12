import React, { Dispatch, FC, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneNumberInput from '../../PhoneNumberInput';
import { LoginData } from '../../../types/auth';
import { useTranslation } from "next-i18next";

interface Props {
  loginData: LoginData;
  setLoginData: Dispatch<SetStateAction<LoginData>>;
  isInvalid: boolean;
}

const PhoneNumber: FC<Props> = ({ loginData, setLoginData, isInvalid }) => {
  const [t] = useTranslation();
  
  function handleInput(data: { countryId: number; phoneNumber: string }) {
    setLoginData(data);
  }

  return (
    <Box>
        <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2, letterSpacing: '0.1px' }}>
        {t('auth:phoneNumber')}
        </Typography>
        <Typography variant='h2' sx={{ mb: 6, lineHeight: '30px', letterSpacing: '0.2px' }}>
        {t('auth:signInStore')}
        </Typography>
        <PhoneNumberInput
          sx={{ mb: 9.5 }}
          onChange={handleInput}
          value={loginData}
          countryError={isInvalid && !loginData.countryId}
          error={isInvalid && !loginData.phoneNumber}
        />
    </Box>
  )
}

export default PhoneNumber