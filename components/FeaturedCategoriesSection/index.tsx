import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CategoryCard from '../CategoryCard';
import { CategoryData } from '../../types/categories';
import CategoryEmptyState from '../CategoryEmptyState';

interface Props {
  categories: CategoryData[];
}

const FeaturedCategoriesSection: FC<Props> = ({ categories }) => {
const categoriesList = categories.filter((item, index) => index <= 2)
  return (
    <Box component='section'>
      <Container maxWidth={false} sx={{ px: { xs: 2, lg: 7.5 } }}>
        <Grid container spacing={2} rowSpacing={4}>
          {categoriesList.length > 0 ? (
            categoriesList.map((item) => (
              <Grid item xs={12} md={4} key={item.id}>
                <CategoryCard data={item} height={400} />
              </Grid>
            ))
          ) : (
            <>
              <Grid item xs={12} md={4}>
                <CategoryEmptyState height={400} />
              </Grid>
              <Grid item xs={12} md={4}>
                <CategoryEmptyState height={400} />
              </Grid>
              <Grid item xs={12} md={4}>
                <CategoryEmptyState height={400} />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedCategoriesSection;
