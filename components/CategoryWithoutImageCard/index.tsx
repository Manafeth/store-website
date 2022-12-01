import React, { FC } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import Link from 'next/link';

import { CategoryData } from '../../types/categories';
import paths from '../../constants/paths';
import useTranslation from 'next-translate/useTranslation';
import { useCommon } from '../../contexts/CommonContext';

interface Props {
    data: CategoryData,
}

const CategoryWithoutImageCard: FC<Props> = ({ data }) => {
    const {t} = useTranslation('common');
    const { storeInfo } = useCommon();
  return (
    <Link href={paths.categoryDetails(data.id)}>
        <Card sx={{ width: '100%', boxShadow: '0px 3px 14px 3px rgba(121, 121, 121, 0.12)', borderRadius: 3, px: 3.25, cursor: 'pointer', backgroundColor: storeInfo.categoryCardColor }}>
        <CardContent>
            <Typography
                variant='h4'
                sx={{ fontWeight: '600', letterSpacing: '0.2px', mb: 1.75, color: storeInfo.categoryTitleColor }}
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
        </CardContent>
        </Card>
    </Link>
  )
}

export default CategoryWithoutImageCard;


