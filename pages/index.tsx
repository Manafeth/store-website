import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeroSection />
    </MainLayout>
  )
}

export default Home
