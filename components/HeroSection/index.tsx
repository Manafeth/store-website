import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Image from 'next/image';
import hero from '../../assets/images/hero.png';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Box component='section' sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex' }}>
            <Image src={hero} alt="hero" />
        </Box>
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
                    SUMMER 2022
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
                    -30% Discount
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
                    We know how large objects will act, but things on a small scale
                </Typography>
                <Link href='/'>
                    <Button variant='contained' sx={{ minWidth: {xs: 100, sm: 160}, p: {xs: 1, sm: 2} }}>
                        SHOP NOW
                    </Button>
                </Link>
            </Container>
        </Box>
    </Box>
  )
}

export default HeroSection