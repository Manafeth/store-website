import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import Image from 'next/image';

import cardCover from '../../assets/images/card-cover.jpg';

interface Props {
}

const CategoryCard: FC<Props> = () => {
  return (
    <Link href='/'>
        <Box
            sx={{
            position: 'relative',
            height: 300,
            cursor: 'pointer',
            }}
        >
            <Image src={cardCover} layout='fill' alt='category' />
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
                    LIGHTING
                </Typography>
                <Typography
                    variant='h3'
                    component='span'
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                    }}
                >
                    5 items
                </Typography>
            </Box>
        </Box>
    </Link>
  )
}

export default CategoryCard;