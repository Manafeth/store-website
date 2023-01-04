import React, {  FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';
import heroEmptyState from '../../assets/images/hero-empty-state.png'
interface Props {
    targetSectionId: string,
    radius?: number
}

const HeroSectionEmptyState: FC<Props> = ({ targetSectionId, radius }) => {
    const {t} = useTranslation('heroSection');

    function scrollToProducts() {
        const yOffset = -91; 
        const element = document.getElementById(targetSectionId);
        // @ts-ignore
        const y = element?.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

  return (
    <Box sx={{ height: '100%', backgroundColor: 'grey.2400', display: 'flex', alignItems: 'center', borderRadius: radius || 0 }}>
        <Container sx={{ maxWidth: 1050, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                <Box sx={{ flexGrow: '1' }}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: {xs: '18px', sm: '48px'},
                            lineHeight: {xs: '26px', sm: '80px'},
                            letterSpacing: '0.2px',
                            mb: {xs: 1, sm: 2}
                        }}
                    >
                        {t('emptyStateTitle')}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {xs: '12px', sm: '14px'},
                            lineHeight: {xs: '16px', sm: '20px'},
                            letterSpacing: '0.2px',
                            color: '#5A5A5A',
                            mb: {xs: 1, sm: 2},
                            maxWidth: {xs: 226, sm: 376}
                        }}
                    >
                        {t('emptyStateDescription')}
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
                        {t('explore')}
                    </Button>
                </Box>
                <Box sx={{  width: {xs: 180, sm: 292}, height: {xs: 120, sm: 234} }}>
                    <Image src={heroEmptyState} alt='empty state' />
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default HeroSectionEmptyState