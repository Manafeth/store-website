import React, { FC, ReactElement, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import useTranslation from 'next-translate/useTranslation';
import { useCommon } from '../../contexts/CommonContext';

interface Props {
  image: ReactElement;
  children: ReactElement;
}
const ContactUsLayout: FC<Props> = ({ image, children }) => {
  const {t} = useTranslation();
  const { storeInfo } = useCommon()

  return (
    <Container maxWidth={false} disableGutters sx={{backgroundColor:'background.paper'}}>
      <Grid container spacing={0} alignItems='stretch' minHeight='100vh'>
        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          <Box
            sx={{
              bgcolor: storeInfo.backgroundColor,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              height: '100%',
              justifyContent: 'space-between',
              flexDirection: 'column',
              px: 3,
              pb: 4,
              position: 'sticky',
              top: 0,
            }}
          >
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {image}
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              px: 3,
            }}
          >
            <Box
              sx={{
                maxWidth: 500,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexDirection: 'column',
                pt: 6,
              }}
            >
              {children}
              <Box
                sx={{
                  display: { md: 'none' },
                }}
              ></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ContactUsLayout;
