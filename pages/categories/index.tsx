import React, { useEffect, useRef, useState } from 'react'
import { NextPage, NextPageContext } from 'next'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import MainLayout from '../../layouts/MainLayout'
import HeroSection from '../../components/HeroSection'
import FeaturedCategoriesSection from '../../components/FeaturedCategoriesSection'
import CategoryCard from '../../components/CategoryCard'
import { getAllCategories, getFeaturedCategories } from '../../services/categories.services'
import { CategoryData } from '../../types/categories'
import CategoryEmptyState from '../../components/CategoryEmptyState'
import useTranslation from 'next-translate/useTranslation'
interface Props {
    categories: CategoryData[],
    allCategories: CategoryData[],
}

const Categories: NextPage<Props>  = ({ categories, allCategories }) => {
    const categoriesSections = useRef(null);
    const [categoriesList, setCategoriesList] = useState(categories);
    const [allcategoriesList, setAllCategoriesList] = useState(allCategories);
    const {t} = useTranslation('common');

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
        if (categories.length === 0) {
            getFeaturedCategories().then((res) => {
                setCategoriesList(res.data.data)
            });
        }
       
        if (allCategories.length === 0) {
            getAllCategories().then((res) => {
                setAllCategoriesList(res.data.data)
            });;
        }
    }, [categories, allCategories])
    
    
  return (
    <MainLayout>
        <HeroSection targetSectionId='categroires-sec' />
        <Box pt={9.5} pb={6} ref={categoriesSections}>
            <FeaturedCategoriesSection categories={categoriesList} />
        </Box>

        <Box component='section' pb={5} pt={6}>
            <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
                <Typography variant='h5' component='h2' sx={{ fontWeight: 600, letterSpacing: '0.2px', mb: 6 }}>
                    {t('shopByCategory')}
                </Typography>
                <Grid container spacing={3} rowSpacing={3.75} id='categroires-sec'>
                    {allcategoriesList.length > 0 ? (
                        allcategoriesList.map((item) => {
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
    </MainLayout>
  )
}

Categories.getInitialProps = async ({req, locale}: NextPageContext) => {
    if (!req) {
        return {
            categories: [],
            allCategories: []
        }
    }
    try {
        const headers = {
            'referer': req?.headers?.referer || '',
            'accepted-language': locale
        }
    
        const categories = await getFeaturedCategories(headers);
        const allCategories = await getAllCategories(headers);
        return {
            categories: categories.data.data,
            allCategories: allCategories.data.data,
        }
    } catch(error: any) {
        return {
            categories: [],
            allCategories: []
        }
    }
}


export default Categories