import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTranslation } from "next-i18next";

import Image from 'next/image';
import hero from '../../assets/images/hero.png';
import heroReflect from '../../assets/images/hero-reflect.png';
import Link from 'next/link';

const HeroSection = () => {
    const [t] = useTranslation();
    const { i18n } = useTranslation();
  return (
    <Box component='section' sx={{ position: 'relative' }}>
        {i18n.language === 'ar'? (
            <Box sx={{ display: 'flex' }}>
            <Image src={heroReflect} alt="hero" />
            </Box>
        ):(
             <Box sx={{ display: 'flex' }}>
             <Image src={hero} alt="hero" />
             </Box>
        )}
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.25)', display: 'flex', alignItems: 'center' }}>
            <Container sx={{ maxWidth: 1050 }}>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: {xs: '14px', sm: '16px'},
                        lineHeight: {xs: '20px', sm: '24px'},
                        letterSpacing: '0.1px',
                        color: 'grey.0',
                        mb: {xs: 1, sm: 2}
                    }}
                >
                    {t('heroSection:summerYear')}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: {xs: '35px', sm: '58px'},
                        lineHeight: {xs: '50px', sm: '80px'},
                        letterSpacing: '0.2px',
                        color: 'grey.0',
                        mb: {xs: 1, sm: 2}
                    }}
                >
                    {t('heroSection:discount')}
                </Typography>
                <Typography
                    sx={{
                        fontSize: {xs: '12px', sm: '14px'},
                        lineHeight: {xs: '16px', sm: '20px'},
                        letterSpacing: '0.2px',
                        color: 'grey.0',
                        mb: {xs: 1, sm: 2},
                        maxWidth: {xs: 226, sm: 376}
                    }}
                >
                     {t('heroSection:description')}
                </Typography>
                <Link href='/'>
                    <Button variant='contained' sx={{ minWidth: {xs: 100, sm: 160}, p: {xs: 1, sm: 2},
                     "&:hover": {
                        backgroundColor: "primary.hover"
                      }
                }}>
                    {t('heroSection:shopNow')}
                    </Button>
                </Link>
            </Container>
        </Box>
    </Box>
  )
}

export default HeroSection