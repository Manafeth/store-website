import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import MuiLink from '@mui/material/Link';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import logoImage from '../../assets/images/logo.svg'
import SearchIcon from '../../assets/images/icons/search.png'
import HeartIcon from '../../assets/images/icons/heart.png'
import CartIcon from '../../assets/images/icons/cart.png'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import paths from '../../constants/paths';
import { useAuthModal } from '../../contexts/AuthModalContext';
import CartDrawer from '../CartDrawer';
import { useCommon } from '../../contexts/CommonContext';
import { useTranslation } from "next-i18next";
import { useCart } from '../../contexts/CartContext';
import { useProfile } from '../../contexts/ProfileContext';




const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [t] = useTranslation();
  const { isloggedIn, handleOpenAuthModal, profileData, fetchAccountData } = useAuthModal();
  const { fetchCartProducts, cartData } = useCart();

  const { storeInfo, fetchStoreInfo } = useCommon();

  const { fetchWishListData, wishListData } = useProfile();
  const pages = [
    {page: t('common:home'), link: paths.home},
    {page: t('common:categories'), link: paths.categories},
  ];
  

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }



  function handleSearch(ev: ChangeEvent<HTMLInputElement>) {
    console.log('search',ev.target.value)
  }
  

  return (
    <AppBar position="static" color='inherit' sx={{ boxShadow: '0' }}>
      <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 91 } }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href='/'>
              <MuiLink>
                <Image src={logoImage} width='140' height='27' alt='logo' />
              </MuiLink>
            </Link>

            <Box px={4}>
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <Avatar alt="Remy Sharp" src={storeInfo.mainImageFilePath?.thumbUrl} sx={{ width: 34, height: 34, mr: 1 }}>
                  S
                </Avatar>
                <Box component='span' sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500, letterSpacing: '0.2px' }}>
                {t('common:welcomeTo')}, <br />
                  {storeInfo.name}  {t('common:store')}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <Box>
                  <Box
                    sx={{
                      width: '20px',
                      borderRadius: '2px',
                      backgroundColor: '#323940',
                      height: '2px',
                      mb: 0.5
                    }}
                  />
                  <Box
                    sx={{
                      width: '20px',
                      borderRadius: '2px',
                      backgroundColor: '#323940',
                      height: '2px',
                      mb: 0.5
                    }}
                  />
                  <Box
                    sx={{
                      width: '20px',
                      borderRadius: '2px',
                      backgroundColor: '#323940',
                      height: '2px'
                    }}
                  />
                </Box>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(({page, link}) => (
                  <Link href={link} key={page}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            
            <Box
              sx={{
                display: 'flex',
                mr: 2
              }}
            >
              <Link href='/'>
                <MuiLink sx={{ display: 'flex' }}>
                  <Image src={logoImage} width='120' height='20' alt='logo' />
                </MuiLink>
              </Link>
            </Box>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: {xs: -1, xl: -2} }}>
            {pages.map(({page, link}) => (
              <Link
                key={page}
                href={link}
              >
                <MuiLink
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.2px',
                    fontWeight: (router.pathname === link ? 600 : 400),
                    color: (router.pathname === link ? 'secondary.contrastText' : 'text.grey'),
                    px: {xs: 1, xl: 2},
                    '&:hover': {
                      fontWeight: 600,
                      color: 'secondary.contrastText',
                    }
                  }}
                >
                  {page}
                </MuiLink>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Image src={SearchIcon} alt='search icon' width='16' height='16' />
                  </InputAdornment>
                ),
                sx: { 
                  backgroundColor: 'grey.200',
                  borderRadius: 2,
                  height: 46,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '10px',
                  lineHeight: '16px',
                  letterSpacing: '0.2px',
                  color: 'text.grey',
                  minWidth: {xs: 250, xl: 300},
                  '& fieldset': {
                    border: '0 !important',
                  }
                }
              }}
              placeholder={t('common:searchPlaceHolder')}
              onChange={handleSearch}
              sx={{mr: 2, display: { xs: 'none', lg: 'block' }}}
            />
            {isloggedIn ? (
              <>
                <Link href={paths.whishList}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mr: {xs: 1, sm: 2, md: 4},
                      cursor: 'pointer'
                    }}
                  >
                    <Image src={HeartIcon} alt='heart icon' width='16' height='15' />
                    <Box
                      sx={{
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0.2px',
                        color: '#323940',
                        ml: 0.5
                      }}
                    >
                      {wishListData.length}
                    </Box>
                  </Box>
                </Link>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mr: {xs: 1, sm: 1.5, md: 2.5},
                    cursor: 'pointer'
                  }}
                  onClick={onOpen}
                >
                  <Image src={CartIcon} alt='cart icon' width='15' height='15' />
                  <Box
                    sx={{
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.2px',
                      color: '#323940',
                      ml: 0.5
                    }}
                  >
                    {cartData.length}
                  </Box>
                </Box>
                <Link href={paths.editAccount}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.2px',
                      color: '#323940',
                      cursor: 'pointer'
                    }}
                  >
                    <Avatar alt="Remy Sharp" src={profileData.mainImageFilePath?.thumbUrl} sx={{ width: 34, height: 34, mr: 1 }}>U</Avatar>
                    {profileData.fullName}
                  </Box>
                </Link>
              </>
            ) : (
              <Button
                onClick={handleOpenAuthModal}
              >
                 {t('common:login')}
              </Button>
            )}
            
          </Box>
        </Toolbar>
      </Container>
      <CartDrawer
        onClose={onClose}
        open={open}
      />
    </AppBar>
  );
};
export default Header;
