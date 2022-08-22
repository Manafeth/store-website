import type { NextPage } from 'next';
import FeaturedCategoriesSection from '../components/FeaturedCategoriesSection';
import HeroSection from '../components/HeroSection';
import MainLayout from '../layouts/MainLayout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import VerticalProductCard from '../components/VerticalProductCard';
import { getMostPurchasedProducts } from '../services/products.services';
import { getFeaturedCategories } from '../services/categories.services';
import { ProductData } from '../types/products';
import { CategoryData } from '../types/categories';

interface Props {
  productsList: ProductData[],
  categories: CategoryData[]
}

const Home: NextPage<Props> = ({ productsList, categories }) => {
  return (
    <MainLayout>
      <HeroSection />
      <Box pt={22.25} pb={11.25}>
        <FeaturedCategoriesSection categories={categories} />
      </Box>
      <Box component='section' >
        <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
          <Divider />
          <Grid container spacing={3.75} rowSpacing={1.25} sx={{ pt: 5.25, pb: 18.25 }}>
            {productsList.map((item) => {
              return (
                <Grid item xs={2.4} key={item.id}>
                  <VerticalProductCard data={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const products = await getMostPurchasedProducts({page: 1, pageSize: 15, generalSearch: ''});
  const categories = await getFeaturedCategories();
  return {
    props: {
      productsList: products.data.data.data,
      categories: categories.data.data
    },
  }
}


export default Home;

