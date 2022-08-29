import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
// import StarIcon from '../../assets/images/icons/star-icon.png';
// import EmptyStarIcon from '../../assets/images/icons/emptyStar-icon.png';
import Link from 'next/link';
import HeartIcon from '../../assets/images/icons/heart-icon.svg';
import CartIcon from '../../assets/images/icons/cart-icon.svg';
// import EyeIcon from '../../assets/images/icons/eye-icon.svg';
import { ProductData } from '../../types/products';
import paths from '../../constants/paths';

interface Props {
  data: ProductData
}

const RelatedProductCard: FC<Props> = ({ data }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <Link href={paths.productDetails(data.id)}>
          <MuiLink>
            <CardMedia
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              image={data.mainImageFilePath?.orignialUrl || ''}
              component='img'
              width={235}
              height={300}
              alt='product'
            />
          </MuiLink>
        </Link>
        {hover ? (
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              bottom: '20px',
              transform: 'translateX(-50%)',
              width: '100%'
            }}
            onMouseEnter={onHover}
          >
            <IconButton>
              <Image src={HeartIcon} alt='heart icon' width={40} height={40} />
            </IconButton>
            <IconButton>
              <Image src={CartIcon} alt='cart icon' width={40} height={40} />
            </IconButton>
            {/* <IconButton>
              <Image src={EyeIcon} alt='eye icon' width={40} height={40} />
            </IconButton> */}
          </Box>
        ) : (
          ''
        )}
      </Box>
      <Box sx={{ pb: 4.25, pt: 3 }}>
        <Link href={paths.productDetails(data.id)}>
          <Typography
            variant='h5'
            component='h3'
            sx={{
              mb: 1.25,
              cursor: 'pointer',
              fontWeight: '700',
              textAlign: 'left',
            }}
          >
            {data.name}
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
            SAR {data.salePrice}
          </Typography>
          <Typography
            variant='h5'
            component='span'
            sx={{ color: '#23856D', fontWeight: '700' }}
          >
            SAR {data.priceAfterDiscount}
          </Typography>
        </Box>
        {/* <Box
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
        </Box> */}
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
