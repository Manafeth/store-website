import React, { useState, MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import LangIocn from '../../assets/images//icons/lang-icon.svg';
import CheckedIcon from '../../assets/images/icons/checked-icon.svg';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import router from 'next/router';

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { i18n } = useTranslation();

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
        sx={{  cursor: 'pointer', color: 'primary.main',display: 'flex',
        alignItems: 'center',
        mr: {xs: 1, sm: 1.5, md: 2.5},}}
        // eslint-disable-next-line react/jsx-no-bind
        onClick={handleClick}
      >
        <Image src={LangIocn} alt='lang icon' />
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
          selected={i18n.language === 'en'}
          sx={{
            'color': i18n.language === 'en' ? 'success.main' : '',
            '&.Mui-selected': {
              backgroundColor: 'white',
            },
          }}
        >
          English {i18n.language === 'en' && <Typography sx={{ ml: 4 }}><Image src={CheckedIcon} alt='checked icon' /></Typography>}
        </MenuItem>
        <Divider sx={{ mx: 2 }} />
        <MenuItem
          onClick={setLangaugeToArabic}
          selected={i18n.language === 'ar'}
          sx={{
            'color': i18n.language === 'ar' ? 'success.main' : '',
            '&.Mui-selected': {
              backgroundColor: 'white',
            },
          }}
        >
          العربية {i18n.language === 'ar' && <Typography sx={{ ml: 4 }}><Image src={CheckedIcon} alt='checked icon' /></Typography>}
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageMenu;
