import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { ProductData } from '../../types/products';
import paths from '../../constants/paths';

interface Props {
    data: ProductData
}

const VerticalProductCard: FC<Props> = ({ data }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
        <Link href={paths.productDetails(data.id)}>
            <MuiLink>
                <Avatar src={data.mainImageFilePath?.orignialUrl || ''} alt='product' sx={{ width: '100%', height: '427px', borderRadius: 0 }}>
                    P
                </Avatar>
            </MuiLink>
        </Link>
        <Box sx={{ pb: 4.25, pt: 3, px: 3 }}>
            <Link href={paths.productDetails(data.id)}>
                <Typography variant='h3' sx={{ mb: 1.25, cursor: 'pointer' }}>
                    {data.name}
                </Typography>
            </Link>
            <Typography variant='h3' component='p' sx={{ color: 'text.secondary', mb: 2, cursor: 'pointer' }}>
                {data.category}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  mb: 2 }}>
                <Typography variant='h3' component='span' sx={{ mr: 1, color: 'text.disabled' }}>
                    SAR <br /> {data.salePrice}
                </Typography>
                <Typography variant='h3' component='span' sx={{ color: '#23856D' }}>
                    SAR <br /> {data.priceAfterDiscount}
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