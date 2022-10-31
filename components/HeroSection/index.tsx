import React, { useEffect, FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import { useTranslation } from "next-i18next";

import Link from 'next/link';
import Carousel from 'react-material-ui-carousel'
import { SlideData } from '../../types/common';

interface Props {
    targetSectionId: string,
    slides: SlideData[]
}

const HeroSection: FC<Props> = ({ targetSectionId, slides }) => {
    const [t] = useTranslation();

    function scrollToProducts() {
        const yOffset = -91; 
        const element = document.getElementById(targetSectionId);
        // @ts-ignore
        const y = element?.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

  return (
    <Box component='section' sx={{ position: 'relative' }}>
        <Carousel>
            {slides.map((item) => (
                <Box key={item.id}>
                    <Box sx={{ display: 'flex' }}>
                        <CardMedia
                            image={item.mainImageFilePath.orignialUrl || ''}
                            component='img'
                            alt={item.desicrption}
                            sx={{ width: '100%', maxWidth: '100%', height: {md: '600px', xs: '300px'}}}
                        />
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
                                {item.code}
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
                                -{item.discountValue}% {t('heroSection:discount')}
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
                                {item.desicrption}
                            </Typography>

                                <Button
                                variant='contained'
                                sx={{
                                    minWidth: {xs: 100, sm: 160},
                                    p: {xs: 1, sm: 2},
                                    "&:hover": {
                                        backgroundColor: "primary.hover"
                                    }
                                }}
                                onClick={scrollToProducts}
                            >
                                {t('heroSection:shopNow')}
                                </Button>
                        </Container>
                    </Box>
                </Box>
            ))}
        </Carousel>
    </Box>
  )
}

export default HeroSection