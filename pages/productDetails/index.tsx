import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Box from '@mui/material/Box';
import Breadcrumb from '../../components/BreadCrumb';
import Container from '@mui/material/Container';
import ProductTabs from '../../components/ProductTabs';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import RelatedProductCard from '../../components/RelatesProducts';
import ProductGallery from '../../components/ImageGallery';
import ProductDetailsInformation from '../../components/ProductDetailsInformation';

const ProductDetails = () => {
  return (
    <MainLayout>
      <>
        <Box
          component='section'
          sx={{ backgroundColor: 'secondary.light', height: 'auto' }}
        >
          <Container maxWidth={false} sx={{ maxWidth: 1050, pt: 5 }}>
            <Breadcrumb />
            <Grid container spacing={3} sx={{ mt: 4 }}>
              <Grid item xs={6}>
                <ProductGallery />
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  <ProductDetailsInformation />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Container maxWidth={false} sx={{ maxWidth: 1050, pt: 5 }}>
            <ProductTabs />
          </Container>
        </Box>
        <Box
          component='section'
          sx={{ backgroundColor: 'secondary.light', height: 'auto' }}
        >
          <Container maxWidth={false} sx={{ maxWidth: 1050, pt: 5 }}>
            <Typography variant='h2' sx={{ mb: 2, cursor: 'pointer' }}>
              Related Products
            </Typography>
            <Divider />
            <Grid container spacing={3} rowSpacing={3.75}>
              <Grid item xs={3}>
                <RelatedProductCard />
              </Grid>
              <Grid item xs={3}>
                <RelatedProductCard />
              </Grid>
              <Grid item xs={3}>
                <RelatedProductCard />
              </Grid>
              <Grid item xs={3}>
                <RelatedProductCard />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    </MainLayout>
  );
};

export default ProductDetails;
