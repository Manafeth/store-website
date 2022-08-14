import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FeaturedCategoryCard from '../FeaturedCategoryCard';

const FeaturedCategoriesSection = () => {
  return (
    <Box component='section'>
      <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
            <Grid container spacing={1.25}>
                <Grid item xs={4}>
                    <FeaturedCategoryCard isVertical />
                </Grid>
                <Grid item xs={4}>
                    <Box mb={1.25}>
                        <FeaturedCategoryCard  />
                    </Box>
                    <Box>
                        <FeaturedCategoryCard  />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <FeaturedCategoryCard isVertical />
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default FeaturedCategoriesSection;