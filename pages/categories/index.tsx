import React, { useEffect, useRef } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import MainLayout from '../../layouts/MainLayout'
// import HeroSection from '../../components/HeroSection'
import FeaturedCategoriesSection from '../../components/FeaturedCategoriesSection'
import CategoryCard from '../../components/CategoryCard'
import { getAllCategories, getFeaturedCategories } from '../../services/categories.services'
import { CategoryData } from '../../types/categories'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface Props {
    categories: CategoryData[],
    allCategories: CategoryData[]
}
  
const Categories: NextPage<Props>  = ({ categories, allCategories }) => {
    const categoriesSections = useRef(null);

    useEffect(() => {
        if (categoriesSections?.current) {
            const yOffset = -91; 
            const element = categoriesSections.current;
            // @ts-ignore
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }, [categoriesSections])
    
  return (
    <MainLayout>
        {/* <HeroSection /> */}
        <Box pt={2.25} pb={5} ref={categoriesSections}>
            <FeaturedCategoriesSection categories={categories} />
        </Box>

        <Box component='section' pb={6}>
            <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
                <Grid container spacing={3} rowSpacing={3.75}>
                    {allCategories.map((item) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                <CategoryCard data={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const localization = await serverSideTranslations(locale || '', ['heroSection', 'common', 'cart', 'auth']);
    const categories = await getFeaturedCategories(locale);
    const allCategories = await getAllCategories(locale);
    
    return {
        props: {
            ...localization,
            categories: categories.data.data,
            allCategories: allCategories.data.data
        },
        revalidate: 10,
    }
}
  

export default Categories