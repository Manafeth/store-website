import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';
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
import useTranslation from 'next-translate/useTranslation';
import { useCart } from '../../contexts/CartContext';
import { useProfile } from '../../contexts/ProfileContext';
import LanguageMenu from '../LanguageMenu';




const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string | string[]>('');
  const router = useRouter();
  const {t} = useTranslation('common');
  const { isloggedIn, handleOpenAuthModal, profileData, fetchAccountData } = useAuthModal();
  const { fetchCartProducts, cartData } = useCart();

  const { storeInfo, fetchStoreInfo } = useCommon();

  const { fetchWishListData, wishListData } = useProfile();

  const pages = [
    {page: t('home'), link: paths.home},
    {page: t('categories'), link: paths.categories},
    {page: t('contactUs'), link: paths.contactUs},
  ];
  

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function handleSearch(ev: ChangeEvent<HTMLInputElement>) {
    setSearch(ev.target.value);
  }

  function onOpen() {
    if (isloggedIn)
    setOpen(true);
    else
    handleOpenAuthModal();
  }

  function onClose() {
    setOpen(false);
  }

  function handleSearchSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    router.push({
      pathname: paths.home,
      query: {
        search: search
      }
    })
  }

  useEffect(() => {
    fetchStoreInfo();
    if (isloggedIn) {
      fetchAccountData();
      fetchCartProducts();
      fetchWishListData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isloggedIn]);

  useEffect(() => {
    if (router.query.search !== undefined) {
      setSearch(router.query.search)
    }
  }, [router.query.search]) 

  return (
    <AppBar position="fixed" color='inherit' sx={{ boxShadow: '0' }}>
      <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 91 } }}>
          <Box px={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Avatar alt="Remy Sharp" src={storeInfo.mainImageFilePath?.thumbUrl} sx={{ width: 34, height: 34, mr: 1 }}>
                SL
              </Avatar>
              <Box component='span' sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500, letterSpacing: '0.2px' }}>
              {t('welcomeTo')}, <br />
                {storeInfo.name}  {t('store')}
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
                      width: '15px',
                      borderRadius: '2px',
                      backgroundColor: '#323940',
                      height: '2px',
                      mb: 0.5
                    }}
                  />
                  <Box
                    sx={{
                      width: '15px',
                      borderRadius: '2px',
                      backgroundColor: '#323940',
                      height: '2px',
                      mb: 0.5
                    }}
                  />
                  <Box
                    sx={{
                      width: '15px',
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
          </Box>

          <Box pr={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Avatar alt="Remy Sharp" src={storeInfo.mainImageFilePath?.thumbUrl} sx={{ width: 34, height: 34, mr: 1 }}>
                SL
              </Avatar>
              <Box component='span' sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500, letterSpacing: '0.2px' }}>
              {t('welcomeTo')}, <br />
                {storeInfo.name}  {t('store')}
              </Box>
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
            <Box component='form' onSubmit={handleSearchSubmit}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button sx={{ p: 0, borderRadius: 0, minWidth: 0 }} type='submit'>
                        <Image src={SearchIcon} alt='search icon' width='16' height='16' />
                      </Button>
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
                value={search}
                placeholder={t('searchPlaceHolder')}
                onChange={handleSearch}
                sx={{mr: 2, display: { xs: 'none', lg: 'block' }}}
              />
            </Box>
            {isloggedIn ? (
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
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mr: {xs: 1, sm: 2, md: 4},
                  cursor: 'pointer'
                }}
                onClick={handleOpenAuthModal}
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
            )}
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
            <LanguageMenu />
            {isloggedIn ? (
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
            ) : (
              <Button
                onClick={handleOpenAuthModal}
              >
                 {t('login')}
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
