import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
import ProductImage from '../../assets/images/product-image.png';
import Link from 'next/link';

const VerticalProductCard = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
        <Link href='/'>
            <MuiLink>
                <Image src={ProductImage} width={239} height={427} alt='product' />
            </MuiLink>
        </Link>
        <Box sx={{ pb: 4.25, pt: 3, px: 3 }}>
            <Link href='/'>
                <Typography variant='h3' sx={{ mb: 1.25, cursor: 'pointer' }}>
                    Graphic Design
                </Typography>
            </Link>
            <Link href='/'>
                <Typography variant='h3' component='p' sx={{ color: 'text.secondary', mb: 2, cursor: 'pointer' }}>
                    English Department
                </Typography>
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  mb: 2 }}>
                <Typography variant='h3' component='span' sx={{ mr: 1, color: 'text.disabled' }}>
                    SAR <br /> 16.48
                </Typography>
                <Typography variant='h3' component='span' sx={{ color: '#23856D' }}>
                    SAR <br /> 6.48
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box
                    sx={{ backgroundColor: '#323940', width: 16, height: 16, borderRadius: '50%', mr: 0.75 }}
                />
                <Box
                    sx={{ backgroundColor: '#23856D', width: 16, height: 16, borderRadius: '50%', mr: 0.75 }}
                />
                <Box
                    sx={{ backgroundColor: '#E77C40', width: 16, height: 16, borderRadius: '50%', mr: 0.75 }}
                />
                <Box
                    sx={{ backgroundColor: '#252B42', width: 16, height: 16, borderRadius: '50%' }}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default VerticalProductCard;