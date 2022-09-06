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
import { useTranslation } from 'react-i18next';
import { useProfileModal } from '../../contexts/ProfileContext';

interface Props {
  emailNotificationData :emailNotificationData,
  loading: boolean;
}

const AcccoutSettingForm: FC<Props> = ({emailNotificationData,loading }) => {
  const { i18n } = useTranslation();
  const {triggerUpdateEmailNotification} = useProfileModal();
  const [notification, setNotification] = useState<emailNotificationData>({
    reminderEmail: false,
    reminderPush: false,
    activityEmail: false,
    activityPush: false
})

  const setLangaugeToEnglish = () => {
    i18n.changeLanguage('en');
    localStorage.setItem('userLanguage', 'en');
  };
  function setLangaugeToArabic() {
    i18n.changeLanguage('ar');
    localStorage.setItem('userLanguage', 'ar');
  }
  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    const payload = {
      ...emailNotificationData,
      activityEmail: event.target.checked

    }
    triggerUpdateEmailNotification(payload).then(()=>{
    }).catch()  
    console.log('clicked')
  }

 
  return (
    <Box
      sx={{
        height: '100%',
        maxWidth: {md: 400}
      }}
    >
      <Typography variant='h1' sx={{ mb: 5, fontSize: { xs: '28px', md: '34px' } }}>
        Account Setting
      </Typography>

      <Box
        sx={{
          pb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h2' component='span' sx={{ flex: '0.75', fontSize: { xs: '20px', md: '24px' } }}>
          Email Notification
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
          mb: 5,
        }}
      >
        We would like you to be first to get customized news, special offers,
        invites to events & exclusive competitions related to Beuand,
      </Typography>

      <Divider sx={{ mb: 5 }} />

      <Box sx={{display:'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
        <Typography variant='h2' sx={{ mb: 5,flex: '0.7', fontSize: { xs: '20px', md: '24px' } }}>
          Shipping Address
        </Typography>
        <Link href='/addressManagment'>
          <IconButton sx={{fontSize:'16px'}}>
            Edit
          </IconButton> 
        </Link>
      </Box>

      <Divider sx={{ mb: 5 }} />

      <Box sx={{ display: 'flex' }}>
        <Typography variant='h2' component='span'>
          Language
        </Typography>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <FormControlLabel
          control={<Checkbox defaultChecked color='success'  
          checked={i18n.language === 'en'} 
          onChange={setLangaugeToEnglish} />}
          label='English'
          sx={{ flex: '0.77', 'color': i18n.language === 'en' ? 'success.main' : '', }}
        />
        <FormControlLabel
          control={<Checkbox color='success'
          checked={i18n.language === 'ar'} 
           onChange={setLangaugeToArabic}/>}
          label='العربية'
          sx={{ 'color': i18n.language === 'ar' ? 'success.main' : '',
           
          }}
        />
      </Box>
    </Box>
  );
};

export default AcccoutSettingForm;
