import React, { useEffect, FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import useTranslation from "next-translate/useTranslation";

import HeroSectionEmptyState from '../HeroSectionEmptyState';
import { BannerData } from '../../types/common' 
import { getBanner } from '../../services/common.services';
interface Props {
    targetSectionId: string,
    data: BannerData
}

const HeroSection: FC<Props> = ({ targetSectionId, data }) => {
    const {t} = useTranslation('heroSection');
    const [banner, setBanner] = useState(data);

    function scrollToProducts() {
        const yOffset = -91; 
        const element = document.getElementById(targetSectionId);
        // @ts-ignore
        const y = element?.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    useEffect(() => {
        if (!data?.titel) {
            getBanner().then((res) => {
                setBanner(res.data.data)
            })
        } else
            setBanner(data)
    }, [data])
    
  return (
    <Box component='section' sx={{ position: 'relative', height: {md: '600px', xs: '300px'} }}>
        {banner?.imageFilePath?.orignialUrl ? (
            <>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia
                        image={banner.imageFilePath.orignialUrl || ''}
                        component='img'
                        alt={banner.titel}
                        sx={{ width: '100%', maxWidth: '100%', height: {md: '600px', xs: '300px'}}}
                    />
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center' }}>
                    <Container sx={{ maxWidth: 1050 }}>
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
                            {banner.titel}
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
                            {banner.description}
                        </Typography>
{/* 
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
                            {t('shopNow')}
                            </Button> */}
                    </Container>
                </Box>
            </>
        ) : (
            <HeroSectionEmptyState targetSectionId={targetSectionId} />
        )}
    </Box>
  )
}

export default HeroSection