import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import Link from 'next/link';

import { CategoryData } from '../../types/categories';
import paths from '../../constants/paths';

interface Props {
    data: CategoryData
}

const CategoryCard: FC<Props> = ({ data }) => {
  return (
    <Link href={paths.categoryDetails(data.id)}>
        <Box
            sx={{
            position: 'relative',
            height: 300,
            cursor: 'pointer',
            }}
        >
            <Avatar src={data.imageFilePath?.orignialUrl || ''} alt='product' sx={{ width: '100%', height: '100%', borderRadius: 0 }}>
                P
            </Avatar>
            <Box sx={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', p: 4 }}>
                <Typography
                    variant='h3'
                    sx={{
                        mb: 1.25,
                        fontSize: '24px',
                        lineHeight: '32px',
                        fontWeight: 'bold',
                        letterSpacing: '0.1px'
                    }}
                >
                    {data.name}
                </Typography>
                <Typography
                    variant='h3'
                    component='span'
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                    }}
                >
                    {data.itemsCount} items
                </Typography>
            </Box>
        </Box>
    </Link>
  )
}

export default CategoryCard;