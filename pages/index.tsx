import type { NextPage, NextPageContext } from 'next';
import HeroSection from '../components/HeroSection';
import MainLayout from '../layouts/MainLayout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { getMostPurchasedProducts } from '../services/products.services';
import { getFeaturedCategories } from '../services/categories.services';
import { ProductData } from '../types/products';
import { CategoryData } from '../types/categories';
import ProductVerticalItem from '../components/ProductVerticalItem';
import { useEffect, useState, useRef } from 'react';
import { useCommon } from '../contexts/CommonContext';
import { useRouter } from 'next/router';
import ProductEmptyState from '../components/ProductEmptyState';
import CategoryCard from '../components/CategoryCard';
import CategoryEmptyState from '../components/CategoryEmptyState';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import paths from '../constants/paths';
interface Props {
  productsList: ProductData[],
  categories: CategoryData[],
}

const HomePage: NextPage<Props> = ({ productsList, categories }) => {
  const { mostPurchasedProducts, fetchMostPurchasedProducts } = useCommon();
  const [products, setProducts] = useState(productsList);
  const [categoriesList, setCategoriesList] = useState(categories);
  const ref = useRef(null);
  const router = useRouter();
  const { search } = router.query;
  const {t} = useTranslation('common');

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
    if (search !== undefined) {
      fetchMostPurchasedProducts({ page: 1, pageSize: 15, generalSearch: search })
      scrollToProducts()
    }
  }, [search])  
  
  useEffect(() => {
    if (productsList.length === 0) {
      getMostPurchasedProducts({page: 1, pageSize: 15, generalSearch: ''}).then((res) => {
        setProducts(res.data.data.data)
      })
    }

    if (categories.length === 0) {
      getFeaturedCategories().then((res) => {
        setCategoriesList(res.data.data)
      })
    }
  }, [productsList, categories])
  
  const featuredCategories = categoriesList.filter((_, index) => index <= 3)
  
  return (
    <MainLayout>
      <HeroSection targetSectionId='recent-products' />
      <Box component='section' pt={9.5} pb={6}>
        <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h5' sx={{ fontWeight: 600, letterSpacing: '0.2px', mb: 6 }}>
              {t('shopByCategory')}
            </Typography>
            <Link href={paths.categories}>
              <MuiLink sx={{ fontWeight: 700 }}>
                {t('showAll')}
              </MuiLink>
            </Link>
          </Box>
          <Grid container spacing={3.75} rowSpacing={1.25} ref={ref} id='recent-products'>
            {featuredCategories.length > 0 ? (
              featuredCategories.map((item) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                      <CategoryCard data={item} />
                    </Grid>
                  )
              })
            ) : (
              <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryEmptyState />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Box>
      <Box component='section' sx={{ pt: 6, pb: 5 }}>
        <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
          <Typography variant='h5' sx={{ fontWeight: 600, letterSpacing: '0.2px', mb: 7 }}>
            {t('listOfProducts')}
          </Typography>
          <Grid container spacing={3.75} rowSpacing={1.25} ref={ref} id='recent-products'>
            {products.length > 0 ? (
                products.map((item) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={item.id}>
                      <ProductVerticalItem data={item} />
                    </Grid>
                  );
                })
            ) : (
              <>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} >
                  <ProductEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} >
                  <ProductEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} >
                  <ProductEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} >
                  <ProductEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} >
                  <ProductEmptyState />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  )
}

HomePage.getInitialProps = async ({ req, locale }: NextPageContext) => {
  if (!req) {
    return {
      productsList: [],
      categories: [],
    }
  }

  const headers = {
    'referer': req?.headers?.referer || '',
    'accepted-language': locale
  }
  const products = await getMostPurchasedProducts({page: 1, pageSize: 15, generalSearch: ''}, headers);
  const categories = await getFeaturedCategories(headers);
  
  return {
    productsList: products.data.data.data,
    categories: categories.data.data,
  }
}


export default HomePage;
