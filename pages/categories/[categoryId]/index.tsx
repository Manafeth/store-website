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
import ProductVerticalItem from '../../../components/ProductVerticalItem';
import Filters from '../../../components/Filters';
import ProductPagination from '../../../components/Pagination';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { CategoryData } from '../../../types/categories';
import { getAllCategories, getCategoryDetails } from '../../../services/categories.services';
import { getProductsByCategory } from '../../../services/products.services';
import { ProductData } from '../../../types/products';

interface Props {
  categoryDetials: CategoryData,
  categoryProducts: {
    products: ProductData[],
    itemsCount: number
  }
}

const CategoryDetails: NextPage<Props> = ({ categoryDetials, categoryProducts }) => {

  console.log('categoryDetials', categoryDetials)
  console.log('categoryProducts', categoryProducts)
  return (
    <MainLayout>
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
                {categoryProducts.products.map((item) => {
                  return (
                    <Grid item xs={4} key={item.id}>
                      <ProductVerticalItem data={item} />
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
          <ProductPagination/>
        </Container>
      </Box>
    </MainLayout>
  );
};


interface IParams extends ParsedUrlQuery {
  categoryId: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categorys = await getAllCategories();
  const paths = categorys.data.data.map((category: CategoryData) => ({
    params: {
      categoryId: JSON.stringify(category.id)
    }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { categoryId } = context.params as IParams;
    const category = await getCategoryDetails(categoryId);
    const categoryProducts = await getProductsByCategory({ categoryId });
    return {
      props: {
        categoryDetials: category.data.data,
        categoryProducts: categoryProducts.data.data
      },
      revalidate: 10,
    }
  } catch(err) {
    return {
      notFound: true,
    }
  }
}

export default CategoryDetails;
