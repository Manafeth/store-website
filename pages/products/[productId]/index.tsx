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
import { getMostPurchasedProducts, getProductDetails, getRelatedProductDetails, toggleProductInWishList } from '../../../services/products.services';
import { ProductData } from '../../../types/products';
// import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useAlert } from '../../../contexts/AlertContext';

interface Props {
  realtedProducts: ProductData[],
  productDetials: ProductData
}

const ProductDetails: NextPage<Props> = ({ productDetials, realtedProducts }) => {
  // const router = useRouter();
  const {sendAlert} = useAlert();
  const [productData, setProductData] = useState<ProductData>({
    id: 0,
    name: '',
    salePrice: 0,
    quantity: 0,
    category: '',
    priceAfterDiscount: 0,
    shortDescription: '',
    description: '',
    pageTitle: '',
    metaDescription: '',
    isInWishList: false,
    imagesFilePath: [],
    attributes: [],
    checkOutAttributes: [],
    subProducts: [],
  })

  function handleTogglingProductInWishList() {
    toggleProductInWishList(productData.id).then(() => {
      setProductData((prevState) => ({
        ...prevState,
        isInWishList: !prevState.isInWishList
      }))
    }).catch((error: any) => {
      sendAlert(error.response.data.Message, 'error')
    });
  }

  useEffect(() => {
    setProductData(productDetials);
  }, [productDetials])
  

  return (
    <MainLayout>
      {/* {router.isFallback ? (
        <Box display='flex' justifyContent='center' alignItems='center' minHeight='calc(100vh - 500px)'>
          <CircularProgress />
        </Box>
      ) : ( */}
        <>
          <Box
            component='section'
            sx={{ backgroundColor: 'secondary.light', height: 'auto' }}
          >
            <Container maxWidth={false} sx={{ maxWidth: 1050, pt: 4.25, pb: 6.5 }}>
              <Breadcrumb />
              <Grid container spacing={7} rowSpacing={4.25}>
                <Grid item xs={6}>
                  <ProductGallery images={productData.imagesFilePath} />
                </Grid>
                <Grid item xs={6}>
                  <ProductDetailsInformation  productDetials={productData} handleTogglingProductInWishList={handleTogglingProductInWishList} />
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
            sx={{ backgroundColor: 'secondary.light', height: 'auto' }}
          >
            <Container maxWidth={false} sx={{ maxWidth: 1050, pt: 5 }}>
              <Typography variant='h2' sx={{ mb: 3, cursor: 'pointer' }}>
                Related Products
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Grid container spacing={3} rowSpacing={3.75}>
                {realtedProducts.map((item) => {
                  return (
                    <Grid item xs={3} key={item.id}>
                      <RelatedProductCard data={item} />
                    </Grid>
                  )
                })}
              </Grid>
            </Container>
          </Box>
        </>
      {/* )} */}
    </MainLayout>
  );
};


interface IParams extends ParsedUrlQuery {
  productId: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getMostPurchasedProducts();
  const paths = products.data.data.data.map((product: ProductData) => ({
    params: {
      productId: JSON.stringify(product.id)
    }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { productId } = context.params as IParams;
    const product = await getProductDetails(productId);
    const realtedProducts = await getRelatedProductDetails(productId);

    return {
      props: {
        productDetials: product.data.data,
        realtedProducts: realtedProducts.data.data
      },
      revalidate: 10,
    }
  } catch(err) {
    return {
      notFound: true,
    }
  }
}


export default ProductDetails;
