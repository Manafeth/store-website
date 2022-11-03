import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import Link from 'next/link';

import { CategoryData } from '../../types/categories';
import paths from '../../constants/paths';
import useTranslation from 'next-translate/useTranslation';

interface Props {
    data: CategoryData,
    height?: number | string
}

const CategoryCard: FC<Props> = ({ data, height }) => {
    const {t} = useTranslation('common');
  return (
    <Link href={paths.categoryDetails(data.id)}>
        <Box
            sx={{
                position: 'relative',
                cursor: 'pointer',
            }}
        >
            <Avatar src={data.imageFilePath?.orignialUrl || ''} alt='category' sx={{ width: '100%', height: height || 300, borderRadius: 3 }}>
                C
            </Avatar>
            <Box
                pt={2}
                display='flex'
                flexDirection='column'
            >
                <Typography
                    variant='h4'
                    sx={{ fontWeight: '600', letterSpacing: '0.2px', mb: 1.75 }}
                >
                    {data.name}
                </Typography>
                <Typography
                    variant='h5'
                    component='span'
                    sx={{ fontWeight: 500, fontSize: 12, lineHeight: '16px', letterSpacing: '0.2px', opacity: 0.5 }}
                >
                    {data.itemsCount} {t('items')}
                </Typography>
            </Box>
        </Box>
    </Link>
  )
}

export default CategoryCard;