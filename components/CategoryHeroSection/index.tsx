import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

import useTranslation from 'next-translate/useTranslation';
import HeroSectionEmptyState from '../HeroSectionEmptyState';
import { BannerData } from '../../types/common';
import { getBanner } from '../../services/common.services';
interface Props {
    targetSectionId: string,
    data: BannerData
}

const CategoryHeroSection: FC<Props> = ({ targetSectionId, data }) => {
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
    <Box component='section' sx={{ position: 'relative', height: {md: '432px', xs: '250px'} }}>
        {banner?.imageFilePath?.orignialUrl ? (
            <>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia
                        image={banner?.imageFilePath?.orignialUrl || ''}
                        component='img'
                        alt={banner.titel}
                        sx={{ width: '100%', maxWidth: '100%', height: {md: '432px', xs: '250px'}, borderRadius: 8}}
                    />
                </Box>
                <Box sx={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: (banner.titel || banner.description) ? 'rgba(255, 255, 255, 0.25)' : '' }}>
                    <Box px={5}>
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
                            {banner.titel}
                        </Typography>
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
                            {banner.description}
                        </Typography>
                        <Button variant='contained' sx={{ minWidth: {xs: 100, sm: 160}, p: {xs: 1, sm: 2} }} onClick={scrollToProducts}>
                            {t('shopNow')}
                        </Button>
                    </Box>
                </Box>
            </>      
        ) : (
            <HeroSectionEmptyState targetSectionId={targetSectionId} radius={8} />
        )}
    </Box>
  )
}

export default CategoryHeroSection