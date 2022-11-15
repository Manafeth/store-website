import React, { useEffect, useRef, useState } from 'react'
import { NextPage, NextPageContext } from 'next'
import Box from '@mui/material/Box'
import MainLayout from '../../layouts/MainLayout'
import HeroSection from '../../components/HeroSection'
// import FeaturedCategoriesSection from '../../components/FeaturedCategoriesSection'
import { getAllCategories, getFeaturedCategories } from '../../services/categories.services'
import { CategoryData } from '../../types/categories'
import useTranslation from 'next-translate/useTranslation'
import CategoriesSection from '../../components/CategoriesSection'
import ProductsSection from '../../components/ProductsSection'
import { getDiscountedProduct, getTopSellingProducts } from '../../services/products.services'
import { ProductData } from '../../types/products'
import paths from '../../constants/paths'
import { getBanner } from '../../services/common.services'
import { BannerData } from '../../types/common'
interface Props {
    // categories: CategoryData[],
    allCategories: CategoryData[],
    discountedProducts: ProductData[],
    topSellingProducts: ProductData[],
    bannerData: BannerData
}

const Categories: NextPage<Props>  = ({ allCategories, discountedProducts, topSellingProducts, bannerData }) => {
    const categoriesSections = useRef(null);
    // const [categoriesList, setCategoriesList] = useState(categories);
    const [allcategoriesList, setAllCategoriesList] = useState(allCategories);
    const [discProducts, setDiscountedProducts] = useState(discountedProducts);
    const [topSellProducts, setTopSellingProducts] = useState(topSellingProducts);

    useEffect(() => {
        if (categoriesSections?.current) {
            const yOffset = -91; 
            const element = categoriesSections.current;
            // @ts-ignore
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }, [categoriesSections])

    useEffect(() => {
        if (discountedProducts.length === 0) {
            getDiscountedProduct().then((res) => {
                setDiscountedProducts(res.data.data)
            });
        }

        if (topSellingProducts.length === 0) {
            getTopSellingProducts().then((res) => {
                setTopSellingProducts(res.data.data)
            });
        }
       
        if (allCategories.length === 0) {
            getAllCategories().then((res) => {
                setAllCategoriesList(res.data.data)
            });
        }
        
    }, [discountedProducts, topSellingProducts, allCategories])
    
    
  return (
    <MainLayout>
        <HeroSection targetSectionId='categroires-sec' data={bannerData} />
        {/* <Box pt={9.5} pb={6} ref={categoriesSections}>
            <FeaturedCategoriesSection categories={categoriesList} />
        </Box> */}

        <Box ref={categoriesSections} id='categroires-sec'>
            <CategoriesSection
                categories={allcategoriesList}
                title='shopByCategory'
                sx={{ pt: 10, pb: 4 }}
            />
        </Box>
        
        <ProductsSection
            sx={{ pt: 4.5 }}
            products={topSellProducts}
            title='topSellingProducts'
            showAll={paths.products}
        />

        <ProductsSection
            sx={{ pt: 7.5, pb: 5 }}
            products={discProducts}
            title='discountedProducts'
        />
    </MainLayout>
  )
}

Categories.getInitialProps = async ({req, locale}: NextPageContext) => {
    if (!req) {
        return {
            // categories: [],
            allCategories: [],
            discountedProducts: [],
            topSellingProducts: [],
            bannerData: {}
        }
    }
    try {
        const headers = {
            'referer': req?.headers?.referer || '',
            'accepted-language': locale
        }
    
        // const categories = await getFeaturedCategories(headers);
        const allCategories = await getAllCategories(headers);
        const discountedProducts = await getDiscountedProduct(headers);
        const topSellingProducts = await getTopSellingProducts(headers);
        const banner = await getBanner(headers);
        return {
            // categories: categories.data.data,
            allCategories: allCategories.data.data,
            discountedProducts: discountedProducts.data.data,
            topSellingProducts: topSellingProducts.data.data,
            bannerData: banner.data.data
        }
    } catch(error: any) {
        return {
            // categories: [],
            allCategories: [],
            discountedProducts: [],
            topSellingProducts: [],
            bannerData: {}
        }
    }
}


export default Categories