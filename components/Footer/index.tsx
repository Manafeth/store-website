import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';

import Image from 'next/image';
import facebook from '../../assets/images/icons/facebook.svg';
import instagram from '../../assets/images/icons/instagram.svg';
import twitter from '../../assets/images/icons/twitter.svg';
import snapchat from '../../assets/images/icons/snapchat.svg';
import tikTok from '../../assets/images/icons/tikTok.svg';
import youtube from '../../assets/images/icons/youtube.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';
import telegram from '../../assets/images/icons/telegram.svg';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import paths from '../../constants/paths';
import { useCommon } from '../../contexts/CommonContext';
import { useAuthModal } from '../../contexts/AuthModalContext';


const Footer = () => {
  const {t} = useTranslation('common');
  const { storeInfo } = useCommon()
  const { isloggedIn } = useAuthModal()


  return (
    <Box component='footer' py={12.5} sx={{ backgroundColor: storeInfo.footerColor }}>
      <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column-reverse', md: 'row' }, textAlign: {xs: 'center', md: 'left'} }}>
          <Box sx={{ maxWidth: { md: 596}, flexGrow: 1, pr: { md: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '13px', lineHeight: '16px', letterSpacing: '0.2px', mb: { xs: 2.5 }}}>
              {storeInfo.description}
            </Typography>
            <Box>
              <Grid container spacing={{ xs: 2, lg: 5 }} sx={{ mb: 2.5 }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', mr: 1 }} component='span'>
                      {t('compliantsNumber')}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', fontWeight: 600 }} component='span'>
                      {storeInfo.complaintNumber}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', mr: 1 }} component='span'>
                      {t('compliantsEmail')}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', fontWeight: 600 }} component='span'>
                      {storeInfo.supportEmail}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {storeInfo.facebook ? (
                  <MuiLink href={storeInfo.facebook} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={facebook} alt='facebook' width='23' height='23' />
                  </MuiLink>
                ): ( <Image src="" alt=''  />)}
                {storeInfo.instagram ? (
                  <MuiLink href={storeInfo.instagram} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={instagram} alt='instagram' width='22' height='22' />
                  </MuiLink>
                ) : (<Image src="" alt=''  />)}
                {storeInfo.twitter ? (
                  <MuiLink href={storeInfo.twitter} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={twitter} alt='twitter' width='22' height='18' />
                  </MuiLink>
                ):(<Image src="" alt=''  />)}
                {storeInfo.snapchat ? (
                  <MuiLink href={storeInfo.snapchat} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={snapchat} alt='snapchat' width='22' height='18' />
                  </MuiLink>
                ):( <Image src="" alt=''  /> )}
                {storeInfo.tikTok ? (
                  <MuiLink href={storeInfo.tikTok} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={tikTok} alt='tikTok' width='22' height='18' />
                  </MuiLink>
                ):( <Image src="" alt=''  /> )}
                {storeInfo.youtube ? (
                  <MuiLink href={storeInfo.youtube} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={youtube} alt='youtube' width='22' height='18' />
                  </MuiLink>
                ):( <Image src="" alt=''  /> )}
                {storeInfo.linkedin ? (
                  <MuiLink href={storeInfo.linkedin} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={linkedin} alt='linkedin' width='22' height='18' />
                  </MuiLink>
                ):( <Image src="" alt=''  /> )}
                {storeInfo.telegram ? (
                  <MuiLink href={storeInfo.telegram} target='_blank' mr={2.75} display='flex' alignItems='center'>
                    <Image src={telegram} alt='telegram' width='22' height='18' />
                  </MuiLink>
                ):( <Image src="" alt=''  /> )}
      
                
              </Box>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, maxWidth: { lg: 320 } }}>
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
              <Box mb={5}>
                <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', mb: 3.5, whiteSpace: 'nowrap' }}>
                {t('legal')}
                </Typography>
                <List sx={{ py: 0 }}>
                    <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Link href={paths.privacyPolicy}>
                        <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                        {t('privacyPolicy')}
                        </MuiLink>
                      </Link>
                    </ListItem>
                    <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Link href={paths.termsOfUse}>
                        <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                        {t('termsOfUse')}
                        </MuiLink>
                      </Link>
                    </ListItem>
                    <ListItem sx={{ p: 0, mb: 1.25, whiteSpace: 'nowrap', textAlign: {xs: 'center', md: 'left'}, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <Link href={paths.refundPolicy}>
                        <MuiLink sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary' }}>
                        {t('refundPolicy')}
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
            <Typography sx={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', color: 'text.secondary', mb: { xs: 5, md: 0 } }}>
              {t('beaundTeam')}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer