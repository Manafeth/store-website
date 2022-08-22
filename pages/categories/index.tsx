import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import MainLayout from '../../layouts/MainLayout'
import HeroSection from '../../components/HeroSection'
import FeaturedCategoriesSection from '../../components/FeaturedCategoriesSection'
import CategoryCard from '../../components/CategoryCard'
import { getAllCategories, getFeaturedCategories } from '../../services/categories.services'
import { NextPage } from 'next'
import { CategoryData } from '../../types/categories'

interface Props {
    categories: CategoryData[],
    allCategories: CategoryData[]
}
  
const Categories: NextPage<Props>  = ({ categories, allCategories }) => {

  return (
    <MainLayout>
        <>
            <HeroSection />
            <Box pt={2.25} pb={5}>
                <FeaturedCategoriesSection categories={categories} />
            </Box>

            <Box component='section' pb={6}>
                <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
                    <Grid container spacing={3} rowSpacing={3.75}>
                        {allCategories.map((item) => {
                            return (
                                <Grid item xs={3} key={item.id}>
                                    <CategoryCard data={item} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </>
    </MainLayout>
  )
}

export async function getStaticProps() {
    const categories = await getFeaturedCategories();
    const allCategories = await getAllCategories();
    console.log('allCategories', allCategories)
    return {
      props: {
        categories: categories.data.data,
        allCategories: allCategories.data.data
      },
    }
}
  

export default Categories