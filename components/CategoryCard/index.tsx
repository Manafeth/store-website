import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import Link from 'next/link';

import { CategoryData } from '../../types/categories';
import paths from '../../constants/paths';
import { useTranslation } from "next-i18next";

interface Props {
    data: CategoryData
}

const CategoryCard: FC<Props> = ({ data }) => {
    const [t] = useTranslation();
  return (
    <Link href={paths.categoryDetails(data.id)}>
        <Box
            sx={{
            position: 'relative',
            height: 300,
            cursor: 'pointer',
            }}
        >
            <Avatar src={data.imageFilePath?.orignialUrl || ''} alt='category' sx={{ width: '100%', height: '100%', borderRadius: 0 }}>
                C
            </Avatar>
            <Box
            sx={{
                position: 'absolute',
                bottom: '29px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '48px',
                p: 4,
                backgroundColor: 'rgba(255,255,255,0.5)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
                borderRadius: '5px',
                textAlign: 'center',
            }}
            >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '7px',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant='h4'
                    sx={{ fontWeight: '500', color: 'primary.dark' }}
                >
                    {data.name}
                </Typography>
                <Typography
                    variant='h5'
                    component='span'
                    sx={{ color: 'regba(0,0,0,0,0.5)' }}
                >
                    {data.itemsCount} {t('common:items')}
                </Typography>
            </Box>
            </Box>
        </Box>
    </Link>
  )
}

export default CategoryCard;