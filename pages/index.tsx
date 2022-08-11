import type { NextPage } from 'next'
import FeaturedCategoriesSection from '../components/FeaturedCategoriesSection'
import HeroSection from '../components/HeroSection'
import MainLayout from '../layouts/MainLayout'
import Box from '@mui/material/Box'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <>
        <HeroSection />
        <Box pt={22.25} pb={11.25}>
          <FeaturedCategoriesSection />
        </Box>
      </>
    </MainLayout>
  )
}

export default Home
