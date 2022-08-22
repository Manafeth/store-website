import type { NextPage } from 'next';
import FeaturedCategoriesSection from '../components/FeaturedCategoriesSection';
import HeroSection from '../components/HeroSection';
import MainLayout from '../layouts/MainLayout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import VerticalProductCard from '../components/VerticalProductCard';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Box pt={22.25} pb={11.25}>
        <FeaturedCategoriesSection />
      </Box>
      <Box component='section' >
        <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
          <Divider />
          <Grid container spacing={3.75} rowSpacing={1.25} sx={{ pt: 5.25, pb: 18.25 }}>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
            <Grid item xs={2.4}>
              <VerticalProductCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  )
}

export default Home
