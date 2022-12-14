import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ManafethIcon from '../../assets/images/logo.svg';
import Image from 'next/image';
import paths from '../../constants/paths';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';

const NotFoundContent = () => {
  const {t} = useTranslation('common');
  const router = useRouter();
  function handleGoBackToHome() {
    router.push(paths.home)
  }
  return (
    <Box
      sx={{mt:5 }}
    >
      <Image src={ManafethIcon} alt="Manafeth Logo" width="163" height="30" />
      <Box sx={{ marginTop: '60px' }}>
        <Typography sx={{ fontSize: '62px', fontWeight: 'bold' }}>
          {t('oops')}
        </Typography>
        <Typography sx={{ fontSize: '72px', fontWeight: 'bold' }}>
          {t('error')}
        </Typography>
        <Typography variant="h1" sx={{ mb: '30px' }}>
          {t('pageNotFound')}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: '20px', width: '80%', color: 'text.primary' }}>
          {t('text')}
        </Typography>
        <Box sx={{mt:5,mb:5}}>
          <Button
            variant="contained"
            type="submit"
            sx={{ 'width': '160px', 'mr': 6 }}
            onClick={handleGoBackToHome}
          >
            {t('backHome')}
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ 'width': '160px',
              'backgroundColor':'background.secondary',
              'color':'text.dark',
              '&:hover': {
                backgroundColor: 'orderStatus.underPreparation',
                opacity: 0.8,
              } }}
          >
            {t('support')}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'flex-start',gap:4, fontFamily: 'Cairo' }}>
      <Link href={paths.privacyPolicy}  >
      <MuiLink sx={{ fontSize: '13px', lineHeight: '20px',fontWeight:'400', letterSpacing: '0.2px', color: 'text.dark' }}>
        {t('privacyPolicy')}
        </MuiLink>
      </Link>
      <Link href={paths.termsOfUse}  >
      <MuiLink sx={{ fontSize: '13px', lineHeight: '20px',fontWeight:'400', letterSpacing: '0.2px', color: 'text.dark' }}>
        {t('termsOfUse')}
        </MuiLink>
      </Link>
      <Link href="/sitemap"  >
      <MuiLink sx={{ fontSize: '13px', lineHeight: '20px',fontWeight:'400', letterSpacing: '0.2px', color: 'text.dark' }}>
        {t('siteMap')}
      </MuiLink>
      </Link>
    </Box>
    </Box>
  );
};

export default NotFoundContent;
