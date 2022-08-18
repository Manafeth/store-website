import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import frame from '../../assets/images/frame.png';
import Typography from '@mui/material/Typography';

const ProductDescription = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <Container>
        <Grid container spacing='40px'>
          <Grid item xs={6}>
            <Image src={frame} alt='product' />
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant='h2'>the quick fox jumps over</Typography>
              <Typography
                variant='h6'
                sx={{
                  color: 'grey.2200',
                  alignContent: 'justify',
                  mt: 3,
                }}
              >
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  color: 'grey.2200',
                  alignContent: 'justify',
                  mt: 3,
                }}
              >
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDescription;
