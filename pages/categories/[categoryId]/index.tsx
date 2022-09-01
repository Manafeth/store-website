import React, { ChangeEvent, useEffect, useState } from 'react';
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
import { ProductAttributesData, ProductByCategoryParams, ProductData } from '../../../types/products';
import { useRouter } from 'next/router';
import productStatusMenu from '../../../constants/ProductStatusValues';

interface Products {
  data: ProductData[],
  totalCount: number,
  totalPages: number,
  page: number,
  pageSize: number,
}
interface Props {
  categoryData: CategoryData,
  categoryDetails: {
    products: Products,
    itemsCount: number,
    categories: CategoryData[],
    attributes: []
  }
}

const CategoryDetails: NextPage<Props> = ({ categoryData, categoryDetails }) => {
  const router = useRouter();

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
  const [categories, setCategories] = useState<CategoryData[]>([])

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
      productStatus: +ev.target.value
    }))
    getProducts({ productStatus: +ev.target.value });
  }

  useEffect(() => {
    if (categoryDetails.products) {
      setProducts(categoryDetails.products);
      setParams({
        page: categoryDetails.products.page,
        pageSize: categoryDetails.products.pageSize
      })
    }

    if (categoryDetails.attributes)
      setAttributes(categoryDetails.attributes)

    if (categoryDetails.categories)
      setCategories(categoryDetails.categories)
  }, [categoryDetails])
  
  return (
    <MainLayout>
      <HeroSection />
      <Box component='footer' py={12.5}>
        <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
          <Grid container spacing={3} rowSpacing={3.75}>
            <Grid item xs={3}>
              <Filters
                getProducts={getProducts}
                setParams={setParams}
                attributes={attributes}
                categories={categories}
                params={params}
              />
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
                  Showing all {products.data.length} results
                </Typography>
                <TextField
                  id='outlined-basic'
                  select
                  variant='outlined'
                  label='Popularity'
                  margin='normal'
                  name='popularity'
                  sx={{ mb: 4, width: '141px' }}
                  onChange={handleSort}
                  value={params.productStatus || 0}
                >
                  <MenuItem value={0} disabled>Popularity</MenuItem>
                  {productStatusMenu.map((item) => {
                    return (
                      <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
                    )
                  })}
                </TextField>
              </Box>
              <CategoryHeroSection />
              <Grid container spacing={3} rowSpacing={3.75} sx={{ mt: 5 }}>
                {products.data.map((item) => {
                  return (
                    <Grid item xs={4} key={item.id}>
                      <ProductVerticalItem data={item} />
                    </Grid>
                  )
                })}
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
    const categoryDetails = await getProductsByCategory({ categoryId, page: 1, pageSize: 12 });
    return {
      props: {
        categoryData: category.data.data,
        categoryDetails: categoryDetails.data.data
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
