import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// import StarIcon from '../../assets/images/icons/gold-star.png';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import HeartIcon from '../../assets/images/icons/heart-icon.svg';
import FilledHeartIcon from '../../assets/images/icons/filled-heart-icon.png';
import CartIcon from '../../assets/images/icons/cart-icon.svg';
// import EyeIcon from '../../assets/images/icons/eye-icon.svg';
import { IconButton } from '@mui/material';
import { ProductData } from '../../types/products';

interface Props {
  productDetials: ProductData,
  handleTogglingProductInWishList: () => void
}

const ProductDetailsInformation: FC<Props> = ({ productDetials, handleTogglingProductInWishList }) => {
  const colorAttribute = productDetials.attributes.find((item) => item.type === 2);
  return (
    <Box>
      <Typography
        variant='h2'
        component='h1'
        sx={{ mb: 1, fontWeight: '400', fontSize: '20px' }}
      >
        {productDetials.name}
      </Typography>
      {/* <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <Image src={StarIcon} alt='instagram' />
        <Typography
          variant='h6'
          component='h1'
          sx={{ mb: 1, fontWeight: '700', color: 'text.secondary' }}
        >
          4.9 Reviews
        </Typography>
      </Box> */}
      <Typography variant='h2' component='span' sx={{ mb: 1 }}>
        SAR {productDetials.salePrice}
      </Typography>
      <Box sx={{ display: 'flex', gap:'10px' }}>
        <Typography
          variant='h6'
          component='h1'
          sx={{ mb: 1, color: 'text.secondary', fontWeight: '700' }}
        >
          Availability :
        </Typography>
        <Typography
          variant='h6'
          component='h1'
          sx={{ mb: 1, color: '#23A6F0', fontWeight: '700' }}
        >
          {productDetials.quantity > 0 ? 'In Stock' : 'Out Stock'}
        </Typography>
      </Box>
      <Typography
        variant='h6'
        component='h1'
        sx={{ mb: 2, color: 'text.secondary' }}
      >
        {productDetials.shortDescription}
      </Typography>
      <Divider sx={{ mb: 1 }} />
      {colorAttribute && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {colorAttribute.options.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  backgroundColor: item.nameEn,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  mr: 0.75,
                }}
              />
            )
          })}
        </Box>
      )}
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button
          variant='contained'
          sx={{ width: 'auto', height: '44px' }}
          type='submit'
        >
          Select Options
        </Button>
        <Box sx={{display:'flex',gap:'5px'}}>
          <IconButton onClick={handleTogglingProductInWishList}>
            <Image src={productDetials.isInWishList ? FilledHeartIcon : HeartIcon} alt='heart icon' width={40} height={40}/>
          </IconButton>
          <IconButton>
            <Image src={CartIcon} alt='cart icon' width={40} height={40} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailsInformation;
