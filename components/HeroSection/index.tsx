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
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0.1px',
                        color: 'grey.0',
                        mb: 2
                    }}
                >
                    SUMMER 2022
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: '58px',
                        lineHeight: '80px',
                        letterSpacing: '0.2px',
                        color: 'grey.0',
                        mb: 2
                    }}
                >
                    -30% Discount
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0.2px',
                        color: 'grey.0',
                        mb: 2,
                        maxWidth: 376
                    }}
                >
                    We know how large objects will act, but things on a small scale
                </Typography>
                <Link href='/'>
                    <Button variant='contained' sx={{ minWidth: 160 }}>
                        SHOP NOW
                    </Button>
                </Link>
            </Container>
        </Box>
    </Box>
  )
}

export default HeroSection