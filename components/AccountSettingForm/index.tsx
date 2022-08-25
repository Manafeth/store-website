import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
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
}

const AcccoutSettingForm: FC<Props> = ({emailNotificationData}) => {
  const [isChecked, setIsChecked] = useState(false);
  const { i18n } = useTranslation();
  const {triggerUpdateEmailNotification} = useProfileModal();
  const [notification, setNotification] = useState<emailNotificationData>({
    reminderEmail: false,
    reminderPush: false,
    activityEmail: false,
    activityPush: false
})

  const setLangaugeToEnglish = () => {
    setIsChecked(isChecked);
    i18n.changeLanguage('ar');
    localStorage.setItem('userLanguage', 'ar');
  };
  function setLangaugeToArabic() {
    setIsChecked(!isChecked);
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
        Account Setting
      </Typography>
      <Box
        sx={{
          pb: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant='h2' component='span' sx={{ flex: '0.75' }}>
          Email Notification
        </Typography>
        <Switch color='success' 
        checked={emailNotificationData.activityEmail}
        onChange={handleChecked}
        value={emailNotificationData.activityEmail}
        />
      </Box>
      <Typography
        sx={{
          width: '76%',
          color: 'text.secondary',
          fontSize: '16px',
          mb: 5,
        }}
      >
        We would like you to be first to get customized news, special offers,
        invites to events & exclusive competitions related to Beuand,
      </Typography>
      <Divider sx={{ mb: 5, width: '80%' }} />
      <Box sx={{display:'flex',alignItems: 'baseline'}}>
      <Typography variant='h2' component='h1' sx={{ mb: 5,flex: '0.7' }}>
      Shipping Address
      </Typography>
      <Link href='/addressManagment'>
      <IconButton sx={{fontSize:'16px'}}>
      Edit
      </IconButton> 
      </Link>
      </Box>
      <Divider sx={{ mb: 5, width: '80%' }} />
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
          sx={{ flex: '0.77', color: 'success.main' }}
        />
        <FormControlLabel
          control={<Checkbox color='success'
          checked={i18n.language === 'ar'} 
           onChange={setLangaugeToArabic}/>}
          label='العربية'
          sx={{
            color: 'success',
            '& .MuiSvgIcon-root': {
              borderRadius: 10,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AcccoutSettingForm;
