import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
import ProductImage from '../../assets/images/product-one.jpg';
import StarIcon from '../../assets/images/icons/star-icon.png';
import EmptyStarIcon from '../../assets/images/icons/emptyStar-icon.png';
import Link from 'next/link';

const RelatedProductCard = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Link href='/'>
        <MuiLink>
          <Image src={ProductImage} width={235} height={300} alt='product' />
        </MuiLink>
      </Link>
      <Box sx={{ pb: 4.25, pt: 3 }}>
        <Link href='/'>
          <Typography
            variant='h5'
            sx={{
              mb: 1.25,
              cursor: 'pointer',
              fontWeight: '700',
              textAlign: 'left',
            }}
          >
            Sketchers GOAL Pant
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography
            variant='h5'
            component='span'
            sx={{
              mr: 1,
              color: 'text.disabled',
              textDecorationLine: 'line-through',
              fontWeight: '700',
            }}
          >
            SAR 16.48
          </Typography>
          <Typography
            variant='h5'
            component='span'
            sx={{ color: '#23856D', fontWeight: '700' }}
          >
            SAR 6.48
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', mb: 2, alignItems: 'flex-start', gap: '20px' }}
        >
          <Box sx={{ display: 'flex' }}>
            <Image src={StarIcon} alt='star' />
            <Image src={StarIcon} alt='star' />
            <Image src={StarIcon} alt='star' />
            <Image src={StarIcon} alt='star' />
            <Image src={EmptyStarIcon} alt='star' />
          </Box>
          <Typography
            variant='h6'
            component='span'
            sx={{ color: 'text.secondary', fontWeight: '700' }}
          >
            10 Reviews
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#23A6F0',
              width: 16,
              height: 16,
              borderRadius: '50%',
              mr: 0.75,
            }}
          />
          <Box
            sx={{
              backgroundColor: '#23856D',
              width: 16,
              height: 16,
              borderRadius: '50%',
              mr: 0.75,
            }}
          />
          <Box
            sx={{
              backgroundColor: '#E77C40',
              width: 16,
              height: 16,
              borderRadius: '50%',
              mr: 0.75,
            }}
          />
          <Box
            sx={{
              backgroundColor: '#252B42',
              width: 16,
              height: 16,
              borderRadius: '50%',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedProductCard;
