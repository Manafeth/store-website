import React, { useEffect, useRef, useState } from 'react'
import { NextPage, NextPageContext } from 'next'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import MainLayout from '../../layouts/MainLayout'
import HeroSection from '../../components/HeroSection'
import FeaturedCategoriesSection from '../../components/FeaturedCategoriesSection'
import CategoryCard from '../../components/CategoryCard'
import { getAllCategories, getFeaturedCategories } from '../../services/categories.services'
import { CategoryData } from '../../types/categories'


interface Props {
    categories: CategoryData[],
    allCategories: CategoryData[],
}

const Categories: NextPage<Props>  = ({ categories, allCategories }) => {
    const categoriesSections = useRef(null);
    const [categoriesList, setCategoriesList] = useState(categories);
    const [allcategoriesList, setAllCategoriesList] = useState(allCategories);

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
        <Box pt={2.25} pb={5} ref={categoriesSections}>
            <FeaturedCategoriesSection categories={categoriesList} />
        </Box>

        <Box component='section' pb={6}>
            <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
                <Grid container spacing={3} rowSpacing={3.75} id='categroires-sec'>
                    {allcategoriesList.map((item) => {
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

Categories.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) {
        return {
            categories: [],
            allCategories: []
        }
    }
    const categories = await getFeaturedCategories();
    const allCategories = await getAllCategories();
    return {
        categories: categories.data.data,
        allCategories: allCategories.data.data,
    }
}


export default Categories