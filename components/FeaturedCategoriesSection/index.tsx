import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FeaturedCategoryCard from '../FeaturedCategoryCard';
import { CategoryData } from '../../types/categories';

interface Props {
  categories: CategoryData[];
}

const FeaturedCategoriesSection: FC<Props> = ({ categories }) => {
  const category1 = categories[0];
  const category2 = categories[1];
  const category3 = categories[2];
  const category4 = categories[3];
  return (
    <Box component='section'>
      <Container maxWidth={false} sx={{ px: { xs: 2, lg: 7.5 } }}>
        <Grid container spacing={2} rowSpacing={4}>
          {category1 && (
            <Grid item xs={12} md={4}>
              <FeaturedCategoryCard data={category1} />
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            {category2 && <FeaturedCategoryCard data={category2} />}
          </Grid>
          <Grid item xs={12} md={4}>
            {category3 && (
              <Box>
                <FeaturedCategoryCard data={category3} />
              </Box>
            )}
          </Grid>

          {category4 && (
            <Grid item xs={12} md={4}>
              <FeaturedCategoryCard isVertical data={category4} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedCategoriesSection;
