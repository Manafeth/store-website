import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import { CategoryData } from '../../types/categories';
import paths from '../../constants/paths';

interface Props {
  isVertical?: boolean,
  data: CategoryData
}

const FeaturedCategoryCard: FC<Props> = ({ isVertical, data }) => {
  return (
    <Link href={paths.categoryDetails(data.id)}>
      <Box
        sx={{
          position: 'relative',
          height: isVertical ? 559 : 274.5,
          cursor: 'pointer',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${data.bannerFilePath?.orignialUrl})`,
          backgroundSize: isVertical ? 'auto 100%' : '100% auto',
          backgroundPosition: 'center',
        }}
      >
          <Box sx={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', p: 4 }}>
              <Typography
                variant='h3'
                sx={{
                  mb: 2.75
                }}
              >
                {data.name}
              </Typography>
            <Typography
              variant='h3'
              component='span'
            >
              {data.itemsCount} items
            </Typography>
          </Box>
      </Box>
    </Link>
  )
}

export default FeaturedCategoryCard;