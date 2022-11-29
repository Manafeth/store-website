import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Breadcrumb from '../../../components/BreadCrumb';
import Container from '@mui/material/Container';
import ProductTabs from '../../../components/ProductTabs';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import RelatedProductCard from '../../../components/ProductVerticalItem';
import ProductGallery from '../../../components/ImageGallery';
import ProductDetailsInformation from '../../../components/ProductDetailsInformation';
import MainLayout from '../../../layouts/MainLayout';
import {  getProductDetails, getRelatedProductDetails, toggleProductInWishList } from '../../../services/products.services';
import { ProductData } from '../../../types/products';
import { NextPage, NextPageContext } from 'next';
import { useAlert } from '../../../contexts/AlertContext';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useProfile } from '../../../contexts/ProfileContext';
import { useRouter } from 'next/router';
import ProductEmptyState from '../../../components/ProductEmptyState';
import { useCommon } from '../../../contexts/CommonContext';

interface Props {
  realtedProducts: ProductData[],
  productDetials: ProductData
}

const ProductDetails: NextPage<Props> = ({ productDetials, realtedProducts }) => {
  const {t} = useTranslation('settings');
  const {sendAlert} = useAlert();
  const { storeInfo } = useCommon();
  const { fetchWishListData } = useProfile();
  const [productData, setProductData] = useState(productDetials);
  const [productsList, setProductsList] = useState(realtedProducts);
  const router = useRouter();
  const { productId } = router.query;
  function handleTogglingProductInWishList() {
    toggleProductInWishList(productData.id).then(() => {
      setProductData((prevState) => ({
        ...prevState,
        isInWishList: !prevState.isInWishList
      }))
      fetchWishListData();
    }).catch((error: any) => {
      sendAlert(error.response.data.Message, 'error')
    });
  }

  useEffect(() => {
    if (!productDetials.id) {
      getProductDetails(productId).then((res) => {
        setProductData(res.data.data)
      })
    }

    if (realtedProducts.length === 0) {
      getRelatedProductDetails(productId).then((res) => {
        setProductsList(res.data.data)
      })
    }
  }, [productDetials, realtedProducts])
  

  return (
    <MainLayout>
      <Head>
        <title>{productData.pageTitle || ''}</title>
        <meta name="description" content={productData.metaDescription || ''} />
      </Head>
      <>
        <Box
          component='section'
          sx={{ backgroundColor: storeInfo.backgroundColor, height: 'auto' }}
        >
          <Container maxWidth={false} sx={{ maxWidth: 1050, pt: 4.25, pb: 6.5 }}>
            <Breadcrumb  productDetials={productData}/>
            <Grid container spacing={{ xs: 2, lg: 7 }} rowSpacing={4.25} >
              <Grid item xs={12} md={6}>
                <ProductGallery images={productData.imagesFilePath} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ProductDetailsInformation 
                  productDetials={productData}
                  handleTogglingProductInWishList={handleTogglingProductInWishList}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Container maxWidth={false} sx={{ maxWidth: 1050, pt: 5 }}>
            <ProductTabs productDetials={productData} />
          </Container>
        </Box>
        <Box
          component='section'
          sx={{ backgroundColor: storeInfo.backgroundColor, height: 'auto' }}
        >
          <Container maxWidth={false} sx={{ maxWidth: 1050, pt: 5 }}>
            <Typography variant='h2' sx={{ mb: 3 }}>
              {t('relatedProducts')}
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={{ xs: 2, lg: 3 }} rowSpacing={3.75}>
              {productsList.length > 0 ? (
                productsList.map((item) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                      <RelatedProductCard data={item} />
                    </Grid>
                  )
                })
              ) : (
                <>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductEmptyState />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductEmptyState />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductEmptyState />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductEmptyState />
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
        </Box>
      </>
      {/* )} */}
    </MainLayout>
  );
};

ProductDetails.getInitialProps = async ({ locale, req, query }: NextPageContext) => {
  if (!req) {
    return {
      productDetials: {},
      realtedProducts: []
    }
  }

  try {
    const headers = {
      'referer': req?.headers?.referer || '',
      'accepted-language': locale
    }
    const { productId } = query
    const product = await getProductDetails(productId, headers);
    const realtedProducts = await getRelatedProductDetails(productId, headers);
    return {
      productDetials: product.data.data,
      realtedProducts: realtedProducts.data.data,
    }
  } catch(error: any) {
    return {
      productDetials: {},
      realtedProducts: []
    }
  }
 
}

export default ProductDetails;
