import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Image from 'next/image';
import hero from '../../assets/images/category-hero.png';
import Link from 'next/link';

const CategoryHeroSection = () => {
  return (
    <Box component='section' sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex' }}>
            <Image src={hero} alt="hero" />
        </Box>
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: '95%', height: '100%', display: 'flex', alignItems: 'center' }}>
            <Container sx={{ maxWidth: 1050 }}>
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: 700,
                        lineHeight: '24px',
                        letterSpacing: '0.1px',
                        color: 'primary.dark',
                        mb: { xs: 1, sm: 2 },
                        fontSize: { xs: '12px', sm: '16px'},
                    }}
                >
                    SUMMER 2022
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '25px', sm: '40px'},
                        lineHeight: { xs: '35px', sm: '80px'},
                        letterSpacing: '0.2px',
                        color: 'primary.dark',
                        mb: { xs: 1, sm: 2 },
                    }}
                >
                   20% OFF
                </Typography>
                <Box sx={{width:{xs: '50%', sm: '40%'}}}>
                <Typography
                 variant='h6'
                    sx={{
                        lineHeight: '20px',
                        letterSpacing: '0.2px',
                        color: 'grey.2200',
                        mb: { xs: 1, sm: 2 },
                        maxWidth: 376,
                        fontSize: { xs: '12px', sm: '16px'},
                    }}
                >
                   We know how large objects will act, 
but things on a small scale.
                </Typography>
                </Box>
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

export default CategoryHeroSection