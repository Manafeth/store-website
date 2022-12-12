import { useEffect, useState, useRef } from 'react';
import type { NextPage, NextPageContext } from 'next';
import HeroSection from '../components/HeroSection';
import MainLayout from '../layouts/MainLayout';
import Box from '@mui/material/Box';
import { getDiscountedProduct, getMostPurchasedProducts } from '../services/products.services';
import { getFeaturedCategories } from '../services/categories.services';
import { ProductData } from '../types/products';
import { CategoryData } from '../types/categories';
import { useCommon } from '../contexts/CommonContext';
import { useRouter } from 'next/router';
import paths from '../constants/paths';
import ProductsSection from '../components/ProductsSection';
import CategoriesSection from '../components/CategoriesSection';
import { getBanner } from '../services/common.services';
import { BannerData } from '../types/common';
interface Props {
  productsList: ProductData[],
  categories: { categoriesWithImages: CategoryData[], categoriesWithoutImages: CategoryData[] },
  discountedProducts: ProductData[],
  bannerData: BannerData
}

const HomePage: NextPage<Props> = ({ productsList, categories, discountedProducts, bannerData }) => {
  const { mostPurchasedProducts, fetchMostPurchasedProducts } = useCommon();
  const [products, setProducts] = useState(productsList);
  const [discProducts, setDiscountedProducts] = useState(discountedProducts);
  const [categoriesList, setCategoriesList] = useState(categories);
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
    if (search !== undefined) {
      fetchMostPurchasedProducts({ page: 1, pageSize: 15, generalSearch: search }).then(() => {
        scrollToProducts()
      })
    }
  }, [search])  
  
  useEffect(() => {
    if (productsList.length === 0 && search === undefined) {
      getMostPurchasedProducts({page: 1, pageSize: 15, generalSearch: ''}).then((res) => {
        setProducts(res.data.data.data)
      })
    }

    if (categories?.categoriesWithImages?.length === 0) {
      getFeaturedCategories().then((res) => {
        setCategoriesList(res.data.data)
      })
    }

    if (discountedProducts.length === 0) {
      getDiscountedProduct().then((res) => {
        setDiscountedProducts(res.data.data)
      })
    }
  }, [productsList, categories, discountedProducts, search])
  
  const categoriesWithImages = (categoriesList?.categoriesWithImages || []).filter((_, index) => index <= 3)
  const categoriesWithoutImages = (categoriesList?.categoriesWithoutImages || []).filter((_, index) => index <= 3)
  
  return (
    <MainLayout>
      <Box pb={5}>
        <HeroSection targetSectionId='recent-products' data={bannerData} />
        <CategoriesSection
          categories={{ categoriesWithImages, categoriesWithoutImages }}
          title='shopByCategory'
          sx={{ pt: 9.5, pb: 6 }}
          seeAllButtonLink={paths.categories}
          seeAllButtonText='seeAllCategories'
        />
        <Box ref={ref} id='recent-products'>
          <ProductsSection
            sx={{ pt: 2.75 }}
            products={products}
            title='listOfProducts'
            seeAllButtonLink={paths.products}
            seeAllButtonText='seeAllProducts'
          />
        </Box>
        {discProducts.length > 0 && (
          <ProductsSection
            sx={{ pt: 2.5 }}
            products={discProducts}
            title='discountedProducts'
          />
        )}
      </Box>
    </MainLayout>
  )
}

HomePage.getInitialProps = async ({ req, locale }: NextPageContext) => {
  if (!req) {
    return {
      productsList: [],
      categories: { categoriesWithImages: [], categoriesWithoutImages: [] },
      discountedProducts: [],
      bannerData: {}
    }
  }
  try {
    const headers = {
      'referer': req?.headers?.referer || '',
      'accepted-language': locale
    }
    const products = await getMostPurchasedProducts({page: 1, pageSize: 15, generalSearch: ''}, headers);
    const categories = await getFeaturedCategories(headers);
    const discountedProducts = await getDiscountedProduct(headers);
    const banner = await getBanner(headers);
    
    return {
      productsList: products.data.data.data,
      categories: categories.data.data,
      discountedProducts: discountedProducts.data.data,
      bannerData: banner.data.data
    }
  } catch(error: any) {
    return {
      productsList: [],
      categories: { categoriesWithImages: [], categoriesWithoutImages: [] },
      discountedProducts: [],
      bannerData: {}
    }
  }
}


export default HomePage;
