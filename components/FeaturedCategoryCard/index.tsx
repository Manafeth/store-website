import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from 'next/link';

interface Props {
  isVertical?: boolean
}

const FeaturedCategoryCard: FC<Props> = ({ isVertical}) => {
  return (
    <Link href='/'>
      <Box
        sx={{
          position: 'relative',
          height: isVertical ? 559 : 274.5,
          cursor: 'pointer',
          backgroundImage: `url(https://via.placeholder.com/408X559.png/09f/fff)`,
          backgroundSize: '100% auto',
          backgroundPositionY: 'center'
        }}
      >
          <Box sx={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', p: 4 }}>
              <Typography
                variant='h3'
                sx={{
                  mb: 2.75
                }}
              >
                Category name
              </Typography>
            <Typography
              variant='h3'
              component='span'
            >
              1500 items
            </Typography>
          </Box>
      </Box>
    </Link>
  )
}

export default FeaturedCategoryCard;