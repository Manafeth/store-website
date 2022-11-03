import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CategoryCard from '../CategoryCard';
import { CategoryData } from '../../types/categories';
import CategoryEmptyState from '../CategoryEmptyState';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  categories: CategoryData[];
}

const FeaturedCategoriesSection: FC<Props> = ({ categories }) => {
  const categoriesList = categories.filter((_, index) => index <= 2);
  const {t} = useTranslation('common')
  return (
    <Box component='section'>
      <Container maxWidth={false} sx={{ px: { xs: 2, lg: 7.5 } }}>
        <Typography variant='h5' sx={{ fontWeight: 600, letterSpacing: '0.2px', mb: 6 }}>
          {t('feateredCategories')}
        </Typography>
        <Grid container spacing={2} rowSpacing={4}>
          {categoriesList.length > 0 ? (
            categoriesList.map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item.id}>
                <CategoryCard data={item} height={400} />
              </Grid>
            ))
          ) : (
            <>
              <Grid item xs={12} md={6} lg={4}>
                <CategoryEmptyState height={400} />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <CategoryEmptyState height={400} />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
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
