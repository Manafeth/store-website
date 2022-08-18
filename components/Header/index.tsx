import * as React from 'react';
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

import logoImage from '../../assets/images/logo.png'
import ArrowDown from '../../assets/images/icons/arrow-down.png'
import SearchIcon from '../../assets/images/icons/search.png'
import HeartIcon from '../../assets/images/icons/heart.png'
import CartIcon from '../../assets/images/icons/cart.png'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import paths from '../../constants/paths';
import { useAuthModal } from '../../contexts/AuthModalContext';
import { useState } from 'react';
import CartDrawer from '../CartDrawer';

const pages = [
  {page: 'Home', link: paths.home},
  {page: 'Categories', link: paths.categories},
  {page: 'Contact us', link: paths.contactUs}
];

const settings = [
  {title: 'Test', link: '/test'},
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElStore, setAnchorElStore] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { isloggedIn, handleOpenAuthModal } = useAuthModal();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenStoreMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElStore(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseStoreMenu = () => {
    setAnchorElStore(null);
  };
  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
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
              <Box onClick={handleOpenStoreMenu} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Avatar alt="Remy Sharp" src="" sx={{ width: 34, height: 34, mr: 1 }}>
                  S
                </Avatar>
                <Box component='span' sx={{ mr: 2, fontSize: '12px', lineHeight: '16px', fontWeight: 500, letterSpacing: '0.2px' }}>
                  Welcome to, <br />
                  Olivia store
                </Box>
                <Box sx={{ transform: Boolean(anchorElStore) ? 'rotate(180deg)' : '' }}>
                  <Image src={ArrowDown} width='16' height='8' alt='Arrow down' />
                </Box>
              </Box>
              <Menu
                sx={{ mt: '69px' }}
                id="menu-appbar"
                anchorEl={anchorElStore}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElStore)}
                onClose={handleCloseStoreMenu}
              >
                {settings.map(({title, link}) => (
                  <Link key={title} href={link}>
                    <MenuItem  onClick={handleCloseStoreMenu}>
                      <Typography textAlign="center">{title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                m
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
              }}
            >
              <Link href='/'>
                <MuiLink>
                  <Image src={logoImage} width='140' height='27' alt='logo' />
                </MuiLink>
              </Link>
            </Box>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: -2 }}>
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
                    px: 2,
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
                  minWidth: 300,
                  '& fieldset': {
                    border: '0 !important',
                  }
                }
              }}
              placeholder='Search product, categories, services....'
              sx={{mr: 2}}
            />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 4
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
                1
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2.5,
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
                1
              </Box>
            </Box>
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
                  <Avatar alt="Remy Sharp" src="" sx={{ width: 34, height: 34, mr: 1 }}>U</Avatar>
                  Ahmed K.
                </Box>
              </Link>
            ) : (
              <Button
                onClick={handleOpenAuthModal}
              >
                Login
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
