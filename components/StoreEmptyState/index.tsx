import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';
import emptyState from '../../assets/images/store-empty-state.png'
// import Link from 'next/link';
// import paths from '../../constants/paths';

const StoreEmptyState: FC = () => {
    const {t} = useTranslation('common');

  return (
    <Box sx={{ height: '100vh', backgroundColor: 'grey.0', display: 'flex', alignItems: 'center' }}>
        <Container sx={{ maxWidth: 1050, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                <Box sx={{ flexGrow: '1' }}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: {xs: '14px', sm: '24px'},
                            lineHeight: {xs: '20px', sm: '36px'},
                            letterSpacing: '0.2px',
                        }}
                    >
                        {t('newStore')}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: {xs: '18px', sm: '48px'},
                            lineHeight: {xs: '26px', sm: '80px'},
                            letterSpacing: '0.2px',
                            mb: {xs: 1, sm: 2}
                        }}
                    >
                        {t('storeNotReady')}
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
                        {t('storeEmptyStateDescription')}
                    </Typography>
                    {/* <Link href={paths.contactUs}>
                        <Button
                            variant='contained'
                            sx={{
                                minWidth: {xs: 100, sm: 160},
                                p: {xs: 1, sm: 2},
                                "&:hover": {
                                    backgroundColor: "primary.hover"
                                },
                                display: 'inline-block',
                                textAlign: 'center'
                            }}
                            component='span'
                        >
                            {t('contactUs')}
                        </Button>
                    </Link> */}
                </Box>
                <Box sx={{  width: {xs: 180, sm: 285}, height: {xs: 120, sm: 245} }}>
                    <Image src={emptyState} alt='empty state' />
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default StoreEmptyState