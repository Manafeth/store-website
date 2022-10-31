import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import { CategoryData } from '../../types/categories';
import paths from '../../constants/paths';

interface Props {
  isVertical?: boolean;
  data: CategoryData;
}

const FeaturedCategoryCard: FC<Props> = ({ isVertical, data }) => {
  const [t] = useTranslation();
  return (
    <Link href={paths.categoryDetails(data.id)}>
      <Box
        sx={{
          position: 'relative',
          // height: isVertical ? {xs: 300, md: 559} : {xs: 150, md: 274.5},
          width: '100%',
          height: '280px',
          cursor: 'pointer',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${data.bannerFilePath?.orignialUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
        }}
      >
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
  );
};

export default FeaturedCategoryCard;
