import React, { useState, MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import LangIocn from '../../assets/images//icons/lang-icon.svg';
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
          width: '20px',
          height: '20px',
        }}
      >
        <Box
          sx={{
            cursor: 'pointer', color: 'primary.main',display: 'flex',
            alignItems: 'center',
            width: '50px',
            height: '46px',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            top: '50%',
          }}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={handleClick}
        >
          <Image src={LangIocn} alt='lang icon' />
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
          English {lang === 'en' && <Typography sx={{ ml: 4 }}><Image src={CheckedIcon} alt='checked icon' /></Typography>}
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
          العربية {lang === 'ar' && <Typography sx={{ ml: 4 }}><Image src={CheckedIcon} alt='checked icon' /></Typography>}
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageMenu;
