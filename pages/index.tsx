import type { GetStaticProps, NextPage } from 'next';
import FeaturedCategoriesSection from '../components/FeaturedCategoriesSection';
import HeroSection from '../components/HeroSection';
import MainLayout from '../layouts/MainLayout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { getMostPurchasedProducts } from '../services/products.services';
import { getFeaturedCategories } from '../services/categories.services';
import { ProductData } from '../types/products';
import { CategoryData } from '../types/categories';
import ProductVerticalItem from '../components/ProductVerticalItem';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useState, useRef } from 'react';
import { useCommon } from '../contexts/CommonContext';
import { useRouter } from 'next/router';
import Divider from '@mui/material/Divider';
interface Props {
  productsList: ProductData[],
  categories: CategoryData[]
}

const Home: NextPage<Props> = ({ productsList, categories }) => {
  const { mostPurchasedProducts, fetchMostPurchasedProducts } = useCommon();
  const [products, setProducts] = useState<ProductData[]>([]);
  const ref = useRef(null);
  const router = useRouter();
  const { search } = router.query;

  function scrollToProducts() {
    const yOffset = -91; 
    const element = ref?.current;
    // @ts-ignore
    const y = element?.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  useEffect(() => {
    setProducts(mostPurchasedProducts);
  }, [mostPurchasedProducts])

  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);
  
  useEffect(() => {
    if (search !== undefined) {
      fetchMostPurchasedProducts({ page: 1, pageSize: 15, generalSearch: search })
      scrollToProducts()
    }
  }, [search])
  
  
  
  return (
    <MainLayout>
      <HeroSection targetSectionId='recent-products' />
      <Box pt={{xs: 6, md: 6.25}} pb={{xs: 6, md: 6.25}}>
        <FeaturedCategoriesSection categories={categories} />
      </Box>
      <Box component='section'>
        <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
          <Divider />
          <Grid container spacing={3.75} rowSpacing={1.25} sx={{ pt: 5.25, pb: 18.25 }} ref={ref} id='recent-products'>
            {products.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={item.id}>
                  <ProductVerticalItem data={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const products = await getMostPurchasedProducts({page: 1, pageSize: 15, generalSearch: ''}, locale);
  const categories = await getFeaturedCategories(locale);
  return {
    props: {
      productsList: products.data.data.data,
      categories: categories.data.data,
      ...(locale && await serverSideTranslations(locale, ['heroSection', 'common', 'cart', 'auth']))
    },
    revalidate: 10,
  }
}


export default Home;

