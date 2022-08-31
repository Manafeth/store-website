import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/icons/facebook-icon.png';
import instagram from '../../assets/images/icons/instagram-icon.png';
import twitter from '../../assets/images/icons/twitter-icon.png';
import Link from 'next/link';
import { List, ListItem } from '@mui/material';
import { useTranslation } from "react-i18next";
import paths from '../../constants/paths';


const Footer = () => {
  const [t] = useTranslation();
  return (
    <Box component='footer' py={12.5}>
      <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column-reverse', md: 'row' }, textAlign: {xs: 'center', md: 'left'} }}>
          <Box sx={{ maxWidth: { md: 596}, flexGrow: 1, pr: 2 }}>
            <Link href={paths.home}>
              <MuiLink sx={{ mb: 3.5, display: 'inline-block' }}>
                <Image src={logo} width='198' height='38' alt='footer logo' />
              </MuiLink>
            </Link>
            <Typography sx={{ fontSize: '13px', lineHeight: '16px', letterSpacing: '0.2px', mb: 2}}>
            {t('common.beuandCompany')}
            </Typography>
            <Box sx={{ display: 'flex', alignItem: 'center', mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Link href='/'>
                <MuiLink mr={2.75} display='flex' alignItems='center'>
                  <Image src={facebook} alt='facebook' width='23' height='23' />
                </MuiLink>
              </Link>
              <Link href='/'>
                <MuiLink mr={2.75} display='flex' alignItems='center'>
                  <Image src={instagram} alt='instagram' width='22' height='22' />
                </MuiLink>
              </Link>
              <Link href='/'>
                <MuiLink display='flex' alignItems='center'>
                  <Image src={twitter} alt='twitter' width='22' height='18' />
                </MuiLink>
              </Link>
            </Box>

            <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
            {t('common.beaundTeam')}
            </Typography>
          </Box>
          <Box pr={{ md: 2}}  mb={{ xs: 2, md: 0 }}>
            <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', mb: 3.5, whiteSpace: 'nowrap' }}>
            {t('common.quickAccess')}
            </Typography>
            <List sx={{ py: 0 }}>
                <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href={paths.categories}>
                    <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                    {t('common.categories')}
                    </MuiLink>
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href={paths.whishList}>
                    <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                    {t('common.wishlist')}
                    </MuiLink>
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href={paths.profileOrders}>
                    <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                    {t('settings.myOrders')}
                    </MuiLink>
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href={paths.editAccount}>
                    <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                    {t('common.settings')}
                    </MuiLink>
                  </Link>
                </ListItem>
            </List>
          </Box>
          <Box mb={{ xs: 2, md: 0 }}>
            <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', mb: 3.5, whiteSpace: 'nowrap' }}>
            {t('common.legal')}
            </Typography>
            <List sx={{ py: 0 }}>
                <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href='/'>
                    <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                    {t('common.privacyPolicy')}
                    </MuiLink>
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href='/'>
                    <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                    {t('common.termsOfUse')}
                    </MuiLink>
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href='/'>
                    <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                    {t('common.refundPolicy')}
                    </MuiLink>
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Link href='/'>
                    <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                    {t('common.faq')}
                    </MuiLink>
                  </Link>
                </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer