import React, { useEffect, useRef } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import MainLayout from '../../layouts/MainLayout'
import HeroSection from '../../components/HeroSection'
import FeaturedCategoriesSection from '../../components/FeaturedCategoriesSection'
import CategoryCard from '../../components/CategoryCard'
import { getAllCategories, getFeaturedCategories } from '../../services/categories.services'
import { CategoryData } from '../../types/categories'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getSlides } from '../../services/common.services'
import { SlideData } from '../../types/common'


interface Props {
    categories: CategoryData[],
    allCategories: CategoryData[],
    slides: SlideData[]
}
  
const Categories: NextPage<Props>  = ({ categories, allCategories, slides }) => {
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
        <HeroSection targetSectionId='categroires-sec' slides={slides} />
        <Box pt={2.25} pb={5} ref={categoriesSections}>
            <FeaturedCategoriesSection categories={categories} />
        </Box>

        <Box component='section' pb={6}>
            <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
                <Grid container spacing={3} rowSpacing={3.75} id='categroires-sec'>
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

export const getServerSideProps: GetServerSideProps = async ({ locale, req }) => {
    const headers = {
      'Accept-Language': locale,
        'referer': req?.headers?.referer || ''
    }
    const localization = await serverSideTranslations(locale || '', ['heroSection', 'common', 'cart', 'auth']);
    const categories = await getFeaturedCategories(headers);
    const allCategories = await getAllCategories(headers);
    const slidesResponse = await getSlides(headers);
    return {
        props: {
            ...localization,
            categories: categories.data.data,
            slides: slidesResponse.data.data,
            allCategories: allCategories.data.data
        }
    }
}
  

export default Categories