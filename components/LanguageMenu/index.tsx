import React, { useState, MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import saFlag from '../../assets/images//icons/sa-flag.png';
import usFlag from '../../assets/images//icons/us-flag.png';
import CheckedIcon from '../../assets/images/icons/checked-icon.svg';
import useTranslation from 'next-translate/useTranslation';
import Box from '@mui/material/Box';
import router from 'next/router';

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { lang } = useTranslation();

  function handleClick(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function setLangaugeToEnglish() {
    localStorage.setItem('userLanguage', 'en');
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: 'en' }); 
    handleClose();
  }
  function setLangaugeToArabic() {
    localStorage.setItem('userLanguage', 'ar');
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: 'ar' }); 
    handleClose();
  }

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          mr: {xs: 1, sm: 1.5, md: 4},
        }}
      >
        <Box
          sx={{
            cursor: 'pointer', color: 'primary.main',display: 'flex',
            alignItems: 'center',
          }}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={handleClick}
        >
          <Image src={lang === 'ar' ? saFlag : usFlag} alt='lang icon' width={32} height={22} />
          <Box sx={{ ml: 0.75, color: 'text.primary', fontSize: '12px' }}>{lang === 'ar' ? 'Ar' : 'En'}</Box>
        </Box>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ borderRadius: 5 }}
      >
        <MenuItem
          onClick={setLangaugeToEnglish}
          selected={lang === 'en'}
          sx={{
            'color': lang === 'en' ? 'success.main' : '',
            '&.Mui-selected': {
              backgroundColor: 'white',
            },
            'fontSize':'14px'
          }}
        >
          <Image src={usFlag} alt='lang icon' width={32} height={22} /> <Box sx={{ ml: 0.75, color: 'text.primary', fontSize: '12px' }}>En</Box>
          {lang === 'en' && <Typography sx={{ ml: 4 }}><Image src={CheckedIcon} alt='checked icon' /></Typography>}
        </MenuItem>
        <Divider sx={{ mx: 2 }} />
        <MenuItem
          onClick={setLangaugeToArabic}
          selected={lang === 'ar'}
          sx={{
            'color': lang === 'ar' ? 'success.main' : '',
            '&.Mui-selected': {
              backgroundColor: 'white',
            },
            'fontSize':'14px'
          }}
        >
          <Image src={saFlag} alt='lang icon' width={32} height={22} /> <Box sx={{ ml: 0.75, color: 'text.primary', fontSize: '12px' }}>Ar</Box>
          {lang === 'ar' && <Typography sx={{ ml: 4 }}><Image src={CheckedIcon} alt='checked icon' /></Typography>}
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageMenu;
