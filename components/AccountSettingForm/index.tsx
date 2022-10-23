import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import React, {ChangeEvent, FC, useState } from 'react';
import Link from 'next/link';
import { emailNotificationData } from '../../types/profile';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import { useProfile } from '../../contexts/ProfileContext';
import { useRouter } from 'next/router';

interface Props {
  emailNotificationData :emailNotificationData,
  loading: boolean;
}

const AcccoutSettingForm: FC<Props> = ({emailNotificationData,loading }) => {
  const [t] = useTranslation();
  const {triggerUpdateEmailNotification} = useProfile();
  const router = useRouter();



  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    const payload = {
      ...emailNotificationData,
      activityEmail: event.target.checked
    }
    triggerUpdateEmailNotification(payload)
  }

  return (
    <Box
      sx={{
        height: '100%',
        maxWidth: {md: 400}
      }}
    >
      <Typography variant='h1' sx={{ mb: 5, fontSize: { xs: '28px', md: '32px' },fontWeight:'700' }}>
        {t('settings:accountSetting')}
      </Typography>

      <Box
        sx={{
          pb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h2' component='span' sx={{ flex: '0.75', fontSize: { xs: '20px', md: '24px' }, fontWeight:'700' }}>
          {t('settings:emailNotification')}
        </Typography>
        <Switch color='success' 
          checked={emailNotificationData.activityEmail}
          onChange={handleChecked}
          value={emailNotificationData.activityEmail}
          disabled={loading}
        />
      </Box>

      <Typography
        sx={{
          color: 'text.secondary',
          fontSize: '16px',
          fontWeight:'400',
          mb: 5,
        }}
      >
      {t('settings:emailTextOne')}{t('settings:emailtextTwo')}
      </Typography>

      <Divider sx={{ mb: 5 }} />

      <Box sx={{display:'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
        <Typography variant='h2' sx={{ mb: 5,flex: '0.7', fontSize: { xs: '20px', md: '24px' } }}>
          {t('settings:shippingAddress')}
        </Typography>
        <Link href='/addressManagment'>
          <IconButton sx={{fontSize:'16px'}}>
            {t('common:edit')}
          </IconButton> 
        </Link>
      </Box>
    </Box>
  );
};

export default AcccoutSettingForm;
