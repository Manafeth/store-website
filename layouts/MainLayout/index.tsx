import Box from '@mui/material/Box'
import React, { FC, ReactElement } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useCommon } from '../../contexts/CommonContext'

interface Props {
    children: ReactElement | ReactElement[]
}

const MainLayout: FC<Props> = ({ children }) => {
  const { storeInfo } = useCommon()
  return (
    <Box component='main' pt={11.375} sx={{ backgroundColor: storeInfo.backgroundColor }}>
        <Header />
        {children}
        <Footer />
    </Box>
  )
}

export default MainLayout