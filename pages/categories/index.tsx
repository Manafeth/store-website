import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import MainLayout from '../../layouts/MainLayout'
import HeroSection from '../../components/HeroSection'
import FeaturedCategoriesSection from '../../components/FeaturedCategoriesSection'
import CategoryCard from '../../components/CategoryCard'

const Categories = () => {
  return (
    <MainLayout>
        <>
            <HeroSection />
            <Box pt={2.25} pb={5}>
                <FeaturedCategoriesSection />
            </Box>

            <Box component='section' pb={6}>
                <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }}>
                    <Grid container spacing={3} rowSpacing={3.75}>
                        <Grid item xs={3}>
                            <CategoryCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CategoryCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CategoryCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CategoryCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CategoryCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CategoryCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CategoryCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CategoryCard />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    </MainLayout>
  )
}

export default Categories