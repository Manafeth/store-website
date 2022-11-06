import React, { ChangeEvent, useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import HeroSection from '../../components/HeroSection';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CategoryHeroSection from '../../components/CategoryHeroSection';
import ProductVerticalItem from '../../components/ProductVerticalItem';
import Filters from '../../components/Filters';
import ProductPagination from '../../components/Pagination';
import { NextPage, NextPageContext } from 'next';
import { CategoryData } from '../../types/categories';
import { getProductsByCategory } from '../../services/products.services';
import { ProductAttributesData, ProductByCategoryParams, ProductData } from '../../types/products';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import productStatusMenu from '../../constants/ProductStatusValues';
import ProductEmptyState from '../../components/ProductEmptyState';

interface Products {
  data: ProductData[],
  totalCount: number,
  totalPages: number,
  page: number,
  pageSize: number,
}

interface Props {
  categoryDetails: {
    products: Products,
    itemsCount: number,
    categories: CategoryData[],
    attributes: []
  }
}

const ProductsPage: NextPage<Props> = ({ categoryDetails}) => {
  const router = useRouter();
  const {t} = useTranslation('common');

  const { categoryId } = router.query
  const [products, setProducts] = useState<Products>({
    data: [],
    totalCount: 0,
    page: 1,
    pageSize: 12,
    totalPages: 0,
  });

  const [params, setParams] = useState<ProductByCategoryParams>({
    generalSearch: '',
    page: 1,
    pageSize: 12,
    priceFrom: 0,
    priceTo: 0,
    productStatus: 0,
    options: [],
  })

  const [attributes, setAttributes] = useState<ProductAttributesData[]>([]);
  const [categories, setCategories] = useState<CategoryData[]>([]);

  async function getProducts(data: ProductByCategoryParams) {
    if (categoryId) {
      const payload: ProductByCategoryParams = {
        page: data.page || params.page,
        pageSize: data.pageSize || params.pageSize,
        generalSearch: data.generalSearch || params.generalSearch,
        categoryId,
        options: data.options || params.options
      }
      if (data.priceFrom || params.priceFrom)
        payload.priceFrom = data.priceFrom || params.priceFrom
      if (data.priceTo || params.priceTo)
        payload.priceTo = data.priceTo || params.priceTo
      if (data.productStatus || params.productStatus)
        payload.productStatus = data.productStatus || params.productStatus
      const productsData = await getProductsByCategory(payload);
      setAttributes(productsData.data.data.attributes)
      setCategories(productsData.data.data.categories)
      setProducts(productsData.data.data.products);
    }
  }

  function handlePageChange(_:ChangeEvent<unknown>, page: number) {
    setParams((prevState) => ({
      ...prevState,
      page
    }))
    getProducts({ page });
  }

  function handleSort(ev: ChangeEvent<HTMLInputElement>) {
    setParams((prevState) => ({
      ...prevState,
      productStatus: +ev.target.value,
      page: 1
    }))
    getProducts({ productStatus: +ev.target.value, page: 1 });
  }

  useEffect(() => {
    if (!categoryDetails?.products?.data) {
      getProductsByCategory({ categoryId: categoryId, page: 1, pageSize: 12 }).then((res) => {
        if (res.data.data.products) {
          setProducts(res.data.data.products);
          setParams({
            page: res.data.data.products.page,
            pageSize: res.data.data.products.pageSize
          })
        }
    
        if (res.data.data.attributes)
          setAttributes(res.data.data.attributes)
    
        if (res.data.data.categories)
          setCategories(res.data.data.categories)
      });
    }
  }, [categoryDetails])
  
  return (
    <MainLayout>
      <HeroSection targetSectionId='products-sec' />
      <Box component='footer' py={12.5}>
        <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
          <Grid container spacing={3} rowSpacing={3.75}>
            <Grid item xs={3} display={{ xs: 'none', md: 'block' }}>
              <Filters
                getProducts={getProducts}
                setParams={setParams}
                attributes={attributes}
                categories={categories}
                params={params}
              />
            </Grid>
            <Grid item md={9}>
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
                  sx={{ mb: 5, fontWeight: '700', color: 'text.secondary' }}
                >
                   {t('showingAll')} {products.data.length} {t('results')} 
                </Typography>
                <TextField
                  id='outlined-basic'
                  select
                  variant='outlined'
                  label={t('popularity')}
                  margin='normal'
                  name='popularity'
                  sx={{ mb: 4, width: '141px', fontSize:'14px',
                  '& .MuiSelect-select':{
                    fontSize: '14px',
                  } }}
                  onChange={handleSort}
                  value={params.productStatus || 0}
                >
                  <MenuItem value={0} disabled>{t('popularity')}</MenuItem>
                  {productStatusMenu.map((item) => {
                    return (
                      <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
                    )
                  })}
                </TextField>
              </Box>
              <CategoryHeroSection targetSectionId='products-sec' />
              <Grid container spacing={3} rowSpacing={3.75} sx={{ mt: 5 }} id='products-sec'>
                {products.data.length > 0 ? (
                  products.data.map((item) => {
                    return (
                      <Grid item xs={12} sm={6} lg={4} key={item.id}>
                        <ProductVerticalItem data={item} />
                      </Grid>
                    )
                  })
                ) : (
                  <>
                    <Grid item xs={12} sm={6} lg={4}>
                      <ProductEmptyState />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                      <ProductEmptyState />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                      <ProductEmptyState />
                    </Grid>
                  </>
                )}
              </Grid>
              {products.totalPages > 1 && (
                <ProductPagination
                  totalPages={products.totalPages}
                  page={params.page!}
                  onChange={handlePageChange}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};

ProductsPage.getInitialProps = async ({locale, req }: NextPageContext) => {
  if (!req) {
    return {
      categoryDetails: {}
    }
  }
  try {
    const headers = {
      'referer': req?.headers?.referer || '',
      'accepted-language': locale
    }
      const categoryDetails = await getProductsByCategory({  page: 1, pageSize: 12 }, headers);
      
      return {
        categoryDetails: categoryDetails.data.data,
      }
  } catch(error: any) {
    return {
      categoryDetails: {}
    }
  }

}

export default ProductsPage;
