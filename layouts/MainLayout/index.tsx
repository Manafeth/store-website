import Box from '@mui/material/Box'
import React, { FC, ReactElement } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

interface Props {
    children: ReactElement | ReactElement[]
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component='main'>
        <Header />
        {children}
        <Footer />
    </Box>
  )
}

export default MainLayout