import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import NotFound from '../assets/images/not-found.png';
import Image from 'next/image';
import NotFoundContent from '../components/NotFoundContent';



const PageNotFound = () => (
  <Container >
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Box sx={{ height: '100vh' }}>
            <NotFoundContent />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src={NotFound}  alt='not-found' />
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default PageNotFound;
