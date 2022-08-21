import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import HeroSection from '../../../components/HeroSection';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CategoryHeroSection from '../../../components/CategoryHeroSection';
import RelatedProductCard from '../../../components/RelatedProducts';
import Filters from '../../../components/Filters';
import ProductPagination from '../../../components/Pagination';


const CategoryDetails = () => {
  return (
    <MainLayout>
      <>
        <HeroSection />
        <Box component='footer' py={12.5}>
          <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
            <Grid container spacing={3} rowSpacing={3.75}>
              <Grid item xs={3}>
                <Filters/>
              </Grid>
              <Grid item xs={9}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <Typography
                    variant='h6'
                    component='h1'
                    sx={{ mb: 5, fontWeight: '700', color: 'text.primary' }}
                  >
                    Showing all 12 results
                  </Typography>
                  <TextField
                    id='outlined-basic'
                    select
                    variant='outlined'
                    label='Popularity'
                    margin='normal'
                    name='popularity'
                    sx={{ mb: 4, width: '141px' }}
                  >
                    <MenuItem value={0}>test</MenuItem>

                    <MenuItem value={1}></MenuItem>
                  </TextField>
                </Box>
                <CategoryHeroSection />
                <Grid container spacing={3} rowSpacing={3.75} sx={{ mt: 5 }}>
                  <Grid item xs={4}>
                    <RelatedProductCard />
                  </Grid>
                  <Grid item xs={4}>
                    <RelatedProductCard />
                  </Grid>
                  <Grid item xs={4}>
                    <RelatedProductCard />
                  </Grid>
                </Grid>
                <Grid container spacing={3} rowSpacing={3.75} sx={{ mt: 2 }}>
                  <Grid item xs={4}>
                    <RelatedProductCard />
                  </Grid>
                  <Grid item xs={4}>
                    <RelatedProductCard />
                  </Grid>
                  <Grid item xs={4}>
                    <RelatedProductCard />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <ProductPagination/>
          </Container>
        </Box>
      </>
    </MainLayout>
  );
};

export default CategoryDetails;
