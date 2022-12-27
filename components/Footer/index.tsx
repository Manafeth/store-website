import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import paths from '../../constants/paths';
import { useCommon } from '../../contexts/CommonContext';
import { useAuthModal } from '../../contexts/AuthModalContext';
import SocialMedia from './components/SocialMedia';
import PaymentProviders from './components/PaymentProviders';
import moment from 'moment';


const Footer = () => {
  const {t} = useTranslation('common');
  const { storeInfo } = useCommon()
  const { isloggedIn } = useAuthModal()


  return (
    <Box component='footer' pb={2} pt={6.25} sx={{ backgroundColor: storeInfo.footerColor }}>
      <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column-reverse', md: 'row' }, textAlign: {xs: 'center', md: 'left'} }}>
          <Box sx={{ maxWidth: { md: 596}, flexGrow: 1, pr: { md: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '13px', lineHeight: '16px', letterSpacing: '0.2px', mb: { xs: 2.5 }}}>
              {storeInfo.description}
            </Typography>
            <Grid container spacing={2} rowSpacing={3} alignItems='center' sx={{ textAlign: 'left', maxWidth: { xs: '400px', md: 'none' }, mx: { xs: 'auto', md: 0 } }}>
              <Grid item xs={4} sm={3}>
                <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px' }} component='span'>
                  {t('forComplaints')}
                </Typography>
              </Grid>
              <Grid item xs={8} sm={9}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', fontWeight: 600, mr: { xs: 2, md: 6 } }} component='span'>
                    {storeInfo.complaintNumber}
                  </Typography>
                  <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', fontWeight: 600 }} component='span'>
                    {storeInfo.supportEmail}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4} sm={3}>
                <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px' }} component='span'>
                  {t('followUs')}
                </Typography>
              </Grid>
              <Grid item xs={8} sm={9}>
                <SocialMedia />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, minWidth: { md: 325 }, maxWidth: { md: 325 } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column-reverse', md: 'row' }, textAlign: {xs: 'center', md: 'left'} }}>
              <Box pr={{ md: 2}}  mb={5}>
                <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', mb: 3.5, whiteSpace: 'nowrap' }}>
                {t('quickAccess')}
                </Typography>
                <List sx={{ py: 0 }}>
                    <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Link href={paths.categories}>
                        <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                        {t('categories')}
                        </MuiLink>
                      </Link>
                    </ListItem>
                    {isloggedIn && (
                      <>
                        <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                          <Link href={paths.whishList}>
                            <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                            {t('wishlist')}
                            </MuiLink>
                          </Link>
                        </ListItem>
                        <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                          <Link href={paths.profileOrders}>
                            <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                            {t('myOrders')}
                            </MuiLink>
                          </Link>
                        </ListItem>
                        <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                          <Link href={paths.editAccount}>
                            <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                            {t('settings')}
                            </MuiLink>
                          </Link>
                        </ListItem>
                      </>
                    )}
                </List>
              </Box>
              <Box mb={2}>
                <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', mb: 3.5, whiteSpace: 'nowrap' }}>
                {t('legal')}
                </Typography>
                <List sx={{ py: 0 }}>
                    <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Link href={paths.refundPolicy}>
                        <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                        {t('refundPolicy')}
                        </MuiLink>
                      </Link>
                    </ListItem>
                    <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Link href={paths.privacyPolicy}>
                        <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', color: 'text.secondary' }}>
                        {t('privacyPolicy')}
                        </MuiLink>
                      </Link>
                    </ListItem>
                    <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Link href={paths.termsOfUse}>
                        <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', color: 'text.secondary' }}>
                        {t('termsOfUse')}
                        </MuiLink>
                      </Link>
                    </ListItem>
                    {/* <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Link href='/'>
                        <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                        {t('faq')}
                        </MuiLink>
                      </Link>
                    </ListItem> */}
                </List>
              </Box>
            </Box>
            <PaymentProviders />
          </Box>
        </Box>
        <Divider sx={{ mt: 2.5, mb: 3, borderColor: '#C6C6C6' }} />
        <Typography sx={{ fontSize: '12px', lineHeight: '16px', color: 'text.secondary', textAlign: 'center' }}>
          {t('copyRight', { year: moment().year() })}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer